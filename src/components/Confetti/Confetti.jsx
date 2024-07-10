import ConfettiSvg from '../../assets/confetti.svg'
import './Confetti.css'

const Confetti = ({children}) => {
  return (
    <div className="confetti-effect">
        <ConfettiSvg className='confetti-icon' />
        {children}
    </div>
  )
}

export default Confetti