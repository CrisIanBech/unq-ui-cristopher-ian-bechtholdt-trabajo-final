import { useEffect, useState } from "react";
import { answerQuestion, getQuestionsByDifficulty } from "../service/api";

const initialQuestionState = { isLoading: true, question: null, answers: null };

const useQuestions = () => {
  const [questions, setQuestions] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [questionsState, setQuestionsState] = useState(initialQuestionState);

  const hasFinished = questions?.length === 0

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
      return { ...lastState, answers: answers }
    });
    selectAnswer(answerId);
  };

  const selectAnswer = async (answerId) => {
    const actualQuestionId = questionsState.question.id
    const isCorrect = await answerQuestion(actualQuestionId, answerId)
    setQuestionsState(lastState => {
      const answers = lastState.answers.map(answer => answer.id === answerId ? {...answer, isCorrect: isCorrect} : answer)
      return { ...lastState, answers: answers }
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
    setQuestions(questions);
  };

  const setActualQuestion = (index) => {
    const question = {id: questions[index].id, value: questions[index].question};
    const answers = getAnswersForQuestion(questions[index]);
    setQuestionsState({
      isLoading: false,
      question: question,
      answers: answers,
    });
  };

  const getAnswersForQuestion = (question) => {
    const answers = [];
    answers.push({ id: "option1", value: question.option1, isEnabled: true });
    answers.push({ id: "option2", value: question.option2, isEnabled: true });
    answers.push({ id: "option3", value: question.option3, isEnabled: true });
    answers.push({ id: "option4", value: question.option4, isEnabled: true });
    return answers;
  };

  useEffect(() => {
    if (!questions || hasFinished) return;
    setActualQuestion(0);
  }, [questions]);

  useEffect(() => {
    if (!difficulty) return;
    getQuestionsFromAPI();
  }, [difficulty]);

  return { onStart, questionsState, onAnswer, currentDifficulty: difficulty, hasFinished };
};

export default useQuestions;
