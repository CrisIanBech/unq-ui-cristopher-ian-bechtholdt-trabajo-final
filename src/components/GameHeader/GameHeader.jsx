import React from 'react'
import BackIcon from '../../assets/arrow-back.svg'
import CheckIcon from '../../assets/check.svg'
import AppIcon, { sizes } from '../AppIcon/AppIcon'
import RoundButton from '../RoundButton/RoundButton'
import './GameHeader.css'

const GameHeader = ({round, maxRounds, correctsQuantity, onBackPressed }) => {
  return (
    <aside className='game-header'>
        <div className='game-header-back-and-icon'>
          <RoundButton onClick={onBackPressed}>
            <BackIcon fill='black' />  
          </RoundButton>
          <AppIcon size={sizes.s} />
        </div>
        <span className='game-header-correct-quantity-container'> 
            {correctsQuantity} 
            <CheckIcon fill={'green'}/>
        </span>
        <p className='game-header-round-counter'>RONDA {round}/{maxRounds}</p>
    </aside>
  )
}

export default GameHeader