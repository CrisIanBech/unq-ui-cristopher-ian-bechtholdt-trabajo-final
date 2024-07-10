import RefreshIcon from '../../assets/refresh.svg'
import RoundButton from '../RoundButton/RoundButton'
import './RetryAnswer.css'

const RetryAnswer = ({ onRetry }) => {
  return (
    <div className='retry-answer'>
        <p>Ha ocurrido un problema</p>
        <span className='retry-message'>
            Reintentar 
            <RoundButton onClick={onRetry}>
                <RefreshIcon />
            </RoundButton>
        </span>
    </div>
  )
}

export default RetryAnswer