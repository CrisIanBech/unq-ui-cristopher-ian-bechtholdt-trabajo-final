import { useEffect, useRef, useState } from "react";
import { answerQuestion, getQuestionsByDifficulty } from "../service/api";

const initialQuestionState = { isLoading: true, question: null, answers: null, correctQuantity: 0};

const useQuestions = () => {
  const totalQuestionsQuantity = useRef(0)
  const [questions, setQuestions] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [questionsState, setQuestionsState] = useState(initialQuestionState);

  const hasFinished = questions?.length === 0
  const actualQuestionQuantity = Math.min((totalQuestionsQuantity.current - questions?.length) + 1, totalQuestionsQuantity.current) 

  const onStart = (difficulty) => {
    setDifficulty(difficulty);
  };

  const onAnswer = (answerId) => {
    setQuestionsState((lastState) => {
      const answers = lastState.answers.map((answer) =>
        answer.id === answerId
          ? { ...answer, isSelected: true, isEnabled: false }
          : { ...answer, isEnabled: false }
      );
      return { ...lastState, isLoading: true, answers: answers }
    });
    selectAnswer(answerId);
  };

  const selectAnswer = async (answerId) => {
    const actualQuestionId = questionsState.question.id
    const isCorrect = await answerQuestion(actualQuestionId, answerId)
    setQuestionsState(lastState => {
      const newCorrectQuantity = isCorrect ? lastState.correctQuantity + 1: lastState.correctQuantity
      const answers = lastState.answers.map(answer => answer.id === answerId ? {...answer, isCorrect: isCorrect} : answer)
      return { ...lastState, isLoading: false, correctQuantity: newCorrectQuantity, answers: answers }
    })
    goNextQuestion()
  };

  const goNextQuestion = () => {
    setTimeout(() => {
      const questionsWithoutFirst = [...questions]
      questionsWithoutFirst.shift()
      setQuestions(questionsWithoutFirst)
    }, 2000)
  }

  const getQuestionsFromAPI = async () => {
    const questions = await getQuestionsByDifficulty(difficulty);
    totalQuestionsQuantity.current = questions.length
    setQuestions(questions);
  };

  const setActualQuestion = (index) => {
    const question = {id: questions[index].id, value: questions[index].question};
    const answers = getAnswersForQuestion(questions[index]);
    setQuestionsState(lastState => ({
      ...lastState,
      isLoading: false,
      question: question,
      answers: answers,
    }));
  };

  const getAnswersForQuestion = (question) => {
    const answers = [];
    answers.push({ id: "option1", value: question.option1, isEnabled: true });
    answers.push({ id: "option2", value: question.option2, isEnabled: true });
    answers.push({ id: "option3", value: question.option3, isEnabled: true });
    answers.push({ id: "option4", value: question.option4, isEnabled: true });
    return answers;
  };

  const restart = () => {
    totalQuestionsQuantity.current = 0
    setDifficulty(null)
    setQuestions(null)
    setQuestionsState(initialQuestionState)
  }

  useEffect(() => {
    if (!questions || hasFinished) return;
    setActualQuestion(0);
  }, [questions]);

  useEffect(() => {
    if (!difficulty) return;
    getQuestionsFromAPI();
  }, [difficulty]);

  return { restart, onStart, questionsState, onAnswer, currentDifficulty: difficulty, hasFinished, actualQuestionQuantity, totalQuestionsQuantity: totalQuestionsQuantity.current };
};

export default useQuestions;
