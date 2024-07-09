import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DifficultySelector from "../../components/DifficultySelector/DifficultySelector";
import QuestionRound from "../../components/QuestionRound/QuestionRound";
import useQuestions from "../../hooks/useQuestions";
import "./Game.css";


const Game = () => {
  const difficulties = ["easy", "medium", "hard", "extreme"];
  const { onStart, questionsState, currentDifficulty, onAnswer, hasFinished } = useQuestions()
  const { isLoading, question, answers } = questionsState

  const isPlaying = !!question && !!answers

  const navigator = useNavigate()

  useEffect(() => {
    if(hasFinished) {
      navigator("/")
    }
  }, [hasFinished])

  if(!currentDifficulty) {
    return (
      <main className="game-page">
        <h2 className="title">Elige la dificultad</h2>
        <DifficultySelector
          onDifficultySelected={onStart}
          difficulties={difficulties}
        />    
      </main>
    )
  }

  if(isPlaying) {
    return (
      <main className="game-page">
        <QuestionRound onAnswer={onAnswer} question={question} answers={answers} />
      </main>
    )
  }
};

export default Game;
