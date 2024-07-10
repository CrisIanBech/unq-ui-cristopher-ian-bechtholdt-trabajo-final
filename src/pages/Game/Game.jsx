import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/Alert/Alert";
import DifficultySelector from "../../components/DifficultySelector/DifficultySelector";
import FloatingLoading from "../../components/FloatingLoading/FloatingLoading";
import GameFinished from "../../components/GameFinished/GameFinished";
import GameHeader from "../../components/GameHeader/GameHeader";
import Loading from "../../components/Loading/Loading";
import QuestionRound from "../../components/QuestionRound/QuestionRound";
import useDifficulties from "../../hooks/useDifficulties";
import useQuestions from "../../hooks/useQuestions";
import "./Game.css";

const goBackTitle = "¿Seguro quieres volver al incio?";
const goBackMessage = "Se perderá el progreso de la partida";

const Game = () => {
  const { difficulties } = useDifficulties()
  const {
    onStart,
    questionsState,
    currentDifficulty,
    onAnswer,
    hasFinished,
    actualQuestionQuantity,
    totalQuestionsQuantity,
    restart
  } = useQuestions();
  const { isLoading, question, answers, correctQuantity } = questionsState;
  const [showDialog, setShowDialog] = useState(false);

  const isPlaying = !!question && !!answers;

  const navigator = useNavigate();

  if (!currentDifficulty && difficulties) {
    console.log(!currentDifficulty && difficulties);
    return (
      <main className="game-page">
        <h2 className="title">Elige la dificultad</h2>
        <DifficultySelector
          onDifficultySelected={onStart}
          difficulties={difficulties}
        />
      </main>
    );
  }

  const onBackPressed = () => {
    setShowDialog(true);
  };

  const hideDialog = () => {
    setShowDialog(false);
  };

  const goHome = () => {
    navigator("/");
  };

  if (isPlaying) {
    return (
      <main className="game-page">
        {isLoading && <FloatingLoading />}
        {hasFinished && <GameFinished onGoToHome={goHome} onPlayAgainPress={restart} />}
        {showDialog && (
          <Alert
            onSecondaryPress={hideDialog}
            onPrimaryPress={goHome}
            description={goBackMessage}
            title={goBackTitle}
          />
        )}
        <GameHeader
          onBackPressed={onBackPressed}
          correctsQuantity={correctQuantity}
          round={actualQuestionQuantity}
          maxRounds={totalQuestionsQuantity}
        />
        <QuestionRound
          onAnswer={onAnswer}
          question={question}
          answers={answers}
        />
      </main>
    );
  }

  return (
    <main className="game-page">
      <Loading />
    </main>
  )
};

export default Game;
