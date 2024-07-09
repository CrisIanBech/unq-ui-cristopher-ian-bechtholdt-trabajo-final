import './AnswerButton.css'

const AnswerButton = ({ answer, onPress }) => {
  
  const {isSelected, isCorrect, isEnabled, value} = answer 

  const onAnswerPressed = () => {
    onPress(answer.id)
  }

  const enabledStyleName = isEnabled ? " enabled" : ""
  const selectedStyleName = isSelected ? " selected" : ""
  const correctStyleName = isCorrect === undefined ? "" : isCorrect ? " correct" : " incorrect"
  const styleName = "answer-button" + enabledStyleName + selectedStyleName + correctStyleName

  return (
    <button onClick={onAnswerPressed} disabled={!isEnabled} className={styleName}>{value}</button>
  )
}

export default AnswerButton