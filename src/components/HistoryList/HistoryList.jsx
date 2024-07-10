import EmptyList from '../EmptyList/EmptyList'
import HistoryItem from '../HistoryItem/HistoryItem'
import './HistoryList.css'

const HistoryList = ({history}) => {
  
  const isEmpty = history.length === 0
  
  return (
    <section className='history-list'>
        {isEmpty && <EmptyList message={"Todavía no has jugado ninguna partida."} />}
        {history.map(game => <HistoryItem key={game.id} game={game} />)}
    </section>
  )
}

export default HistoryList