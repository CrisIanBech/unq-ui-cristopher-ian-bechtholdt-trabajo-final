import { useNavigate } from 'react-router-dom'
import BackIcon from '../../assets/arrow-back.svg'
import HistoryList from "../../components/HistoryList/HistoryList"
import RoundButton from '../../components/RoundButton/RoundButton'
import useHistory from '../../hooks/useHistory'
import './History.css'

const History = () => {

  const { history } = useHistory()
  const navigator = useNavigate()

  const goBack = () => {
    navigator("/")
  }

  return (
    <main className="history-page">
      <div className="history-page-header">
        <RoundButton onClick={goBack}>
          <BackIcon className='history-page-check-icon previous-button' />
        </RoundButton>
        <h1 className='history-page-title title'>Historial</h1>
      </div>
      <HistoryList history={history} />
    </main>
  )
}

export default History