import './App.css'
import AnswerButton from './components/AnswerButton/AnswerButton'
import Question from './components/Question/Question'

function App() {

  return (
    <div style={{height: "100%", width: "100%", gap: "16px", display: "flex", flexDirection: "column"}}>
      <Question question={"¿Buenas?"} />
      <AnswerButton isCorrect={true} isEnabled={false} answer={"Respuesta 1"} />
      <AnswerButton isCorrect={false} isEnabled={false} answer={"Respuesta 1"} />
      <AnswerButton isEnabled={true} answer={"Respuesta 1"} />
      <AnswerButton isEnabled={true} answer={"Respuesta 1"} />
    </div>
  )
}

export default App
