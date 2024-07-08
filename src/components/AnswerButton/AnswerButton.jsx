import './AnswerButton.css'

const AnswerButton = ({ answer, isSelected, isCorrect, isEnabled, onPress }) => {
  
  const onAnswerPressed = () => {
    onPress(answer)
  }

  const enabledStyleName = isEnabled ? " enabled" : ""
  const selectedStyleName = isSelected ? " selected" : ""
  const correctStyleName = isCorrect === undefined ? "" : isCorrect ? " correct" : " incorrect"
  const styleName = "answer-button" + enabledStyleName + selectedStyleName + correctStyleName

  return (
    <button onClick={onAnswerPressed} disabled={!isEnabled} className={styleName}>{answer}</button>
  )
}

export default AnswerButton