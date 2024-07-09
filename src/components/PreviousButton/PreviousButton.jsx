import LeftIcon from '../../assets/left.svg';
import RoundButton from '../RoundButton/RoundButton';

const PreviousButton = ({onClick}) => {
  return (
    <RoundButton onClick={onClick} className='carrousel-button left'><LeftIcon width={98} height={98} /></RoundButton>
  )
}

export default PreviousButton