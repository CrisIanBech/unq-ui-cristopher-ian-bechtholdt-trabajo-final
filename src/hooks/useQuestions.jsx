import { useEffect, useRef, useState } from "react";
import { save } from "../helpers/historyDAO";
import { answerQuestion, getQuestionsByDifficulty } from "../service/api";

const initialQuestionState = {
  isLoading: true,
  question: null,
  answers: null,
  correctQuantity: 0,
  hasErrorAnswering: false,
  hasErrorQuestions: false
};

const useQuestions = () => {
  const totalQuestionsQuantity = useRef(0);
  const initTime = useRef(0)
  const [questions, setQuestions] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [questionsState, setQuestionsState] = useState(initialQuestionState);

  const hasFinished = questions?.length === 0;
  const actualQuestionQuantity = Math.min(
    totalQuestionsQuantity.current - questions?.length + 1,
    totalQuestionsQuantity.current
  ) || 1;

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
      return { ...lastState, isLoading: true, answers: answers };
    });
    selectAnswer(answerId);
  };

  const selectAnswer = async (answerId) => {
    setQuestionsState(lastState => ({...lastState, isLoading: true}))
    try {
      const actualQuestionId = questionsState.question.id;
      const isCorrect = await answerQuestion(actualQuestionId, answerId);
      setQuestionsState((lastState) => {
        const newCorrectQuantity = isCorrect
          ? lastState.correctQuantity + 1
          : lastState.correctQuantity;
        const answers = lastState.answers.map((answer) =>
          answer.id === answerId ? { ...answer, isCorrect: isCorrect } : answer
        );
        return {
          ...lastState,
          hasErrorAnswering: false,
          isLoading: false,
          correctQuantity: newCorrectQuantity,
          answers: answers,
        };
      });
      goNextQuestion();
    } catch (error) {
      setQuestionsState((lastState) => ({ ...lastState, hasErrorAnswering: true }));
    }
  };

  const goNextQuestion = () => {
    setTimeout(() => {
      const questionsWithoutFirst = [...questions];
      questionsWithoutFirst.shift();
      setQuestions(questionsWithoutFirst);
    }, 2000);
  };

  const getQuestionsFromAPI = async () => {
    try {
      const questions = await getQuestionsByDifficulty(difficulty);
      totalQuestionsQuantity.current = questions.length;
      setQuestions(questions);
      initTime.current = new Date().getTime()
      saveGameState()
    } catch (error) {
      setQuestionsState(lastState => ({...lastState, hasErrorQuestions: true}))
    }
  };

  const saveGameState = () => {
    const gameState = {
      id: initTime.current,
      correctAnswered: questionsState.correctQuantity,
      difficulty: difficulty,
      total: totalQuestionsQuantity.current,
      roundsPlayed: actualQuestionQuantity 
    }
    save(gameState)
  }

  const setActualQuestion = (index) => {
    const question = {
      id: questions[index].id,
      value: questions[index].question,
    };
    const answers = getAnswersForQuestion(questions[index]);
    setQuestionsState((lastState) => ({
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
    totalQuestionsQuantity.current = 0;
    initTime.current = 0;
    setDifficulty(null);
    setQuestions(null);
    setQuestionsState(initialQuestionState);
  };

  const retryAnswer = () => {
    const selectedAnswer = questionsState.answers.find(answer => answer.isSelected)
    console.log(selectedAnswer)
    selectAnswer(selectedAnswer.id)
  }

  const retryQuestions = () => {
    setQuestionsState(initialQuestionState)
    getQuestionsFromAPI()
  }

  useEffect(() => {
    if (!questions || hasFinished) return;
    setActualQuestion(0);
  }, [questions]);

  useEffect(() => {
    if (!difficulty) return;
    getQuestionsFromAPI();
  }, [difficulty]);

  useEffect(() => {
    if(questionsState.isLoading | !questionsState.question) return;
    saveGameState()
  }, [questionsState])

  return {
    restart,
    onStart,
    questionsState,
    onAnswer,
    currentDifficulty: difficulty,
    hasFinished,
    actualQuestionQuantity,
    totalQuestionsQuantity: totalQuestionsQuantity.current,
    retryAnswer,
    retryQuestions
  };
};

export default useQuestions;
