import BackIcon from '../../assets/arrow-back.svg'
import CheckIcon from '../../assets/check.svg'
import AppIcon, { sizes } from '../AppIcon/AppIcon'
import RoundButton from '../RoundButton/RoundButton'
import './GameHeader.css'

const GameHeader = ({round, maxRounds, correctsQuantity, onBackPressed, gameDifficulty }) => {
  return (
    <aside className='game-header'>
        <div className='game-header-back-and-icon'>
          <RoundButton onClick={onBackPressed}>
            <BackIcon className='game-header-back-icon previous-button' fill='black' />  
          </RoundButton>
          <AppIcon size={sizes.s} />
        </div>
        <span className='game-header-correct-quantity-container'> 
            {correctsQuantity} 
            <CheckIcon className='game-header-check-icon' fill={'green'}/>
        </span>
        <div className='game-header-info-game'>
          <p className='game-header-difficulty'>{gameDifficulty}</p>
          <p className='game-header-round-counter'>RONDA {round}/{maxRounds}</p>
        </div>
    </aside>
  )
}

export default GameHeader