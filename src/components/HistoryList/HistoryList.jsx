import HistoryItem from '../HistoryItem/HistoryItem'
import './HistoryList.css'

const HistoryList = ({history}) => {
  return (
    <section className='history-list'>
        {history.map(game => <HistoryItem key={game.id} game={game} />)}
    </section>
  )
}

export default HistoryList