import RightIcon from '../../assets/right.svg';
import RoundButton from '../RoundButton/RoundButton';

const NextButton = ({onClick}) => {
  return (
    <RoundButton onClick={onClick} className='carrousel-button right'><RightIcon width={98} height={98} /></RoundButton>
  )
}

export default NextButton