import TrophyIcon from '../../assets/trophy.svg'
import Button, { variants } from '../Button/Button'
import Confetti from '../Confetti/Confetti'
import './GameFinished.css'

const GameFinished = ({onPlayAgainPress, onGoToHome}) => {
  return (
    <div className='alert-background'>
        <div className='alert-container'>
            <h3 className='finished-message'>PARTIDA FINALIZADA</h3>
            <Confetti>
                <TrophyIcon className='trophy-icon' />
            </Confetti>
            <div className='alert-buttons-container'>
                <Button onClick={onGoToHome} content={"Volver al inicio"} />
                <Button onClick={onPlayAgainPress} content={"Volver a jugar"} variant={variants.validation} />
            </div>
        </div>
    </div>
  )
}

export default GameFinished