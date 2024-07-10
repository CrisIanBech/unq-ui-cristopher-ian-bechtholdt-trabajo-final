import './HistoryItem.css'

const HistoryItem = ({ game }) => {
  const { correctAnswered, id, difficulty, total, roundsPlayed } = game
  const hasLeftGame = roundsPlayed < total
  return (
    <div className='history-item'>
      <p>{new Date(id).toLocaleDateString()}</p>
      <p>{difficulty}</p>
      <p>{roundsPlayed}/{total}</p>
      <p>{correctAnswered}</p>
      {hasLeftGame && <p>Abandonado</p>}
    </div>
  )
}

export default HistoryItem