import DifficultySelector from "../../components/DifficultySelector/DifficultySelector";
import './Game.css';

const Game = () => {
  
  return (
    <main className="game-page">
      <h2 className="title">Elige la dificultad</h2>
      <DifficultySelector difficulties={["easy", "medium", "hard", "extreme"]} />
    </main>
  )
}

export default Game