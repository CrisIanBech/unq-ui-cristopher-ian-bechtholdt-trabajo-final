import CheckIcon from '../../assets/check.svg'
import './HistoryItem.css'

const HistoryItem = ({ game }) => {
  const { correctAnswered, id, difficulty, total, roundsPlayed } = game
  const hasLeftGame = roundsPlayed < total
  const date = new Date(id)
  return (
    <div className='history-item'>
      <p className='history-item-date'>{date.toLocaleDateString()} {date.toLocaleTimeString()}</p>
      <p className='history-item-difficulty'>{difficulty}</p>
      <div className='history-item-points-info'>
        <p className='history-item-total-rounds'>{roundsPlayed}/{total}</p>
        <div className='history-item-correct-answered-container'>
          <CheckIcon fill='green' />
          <p className='history-item-correct-answered'>{correctAnswered}</p>
        </div>
      </div>
      {hasLeftGame && <p className='history-item-left'>Abandonado</p>}
    </div>
  )
}

export default HistoryItem