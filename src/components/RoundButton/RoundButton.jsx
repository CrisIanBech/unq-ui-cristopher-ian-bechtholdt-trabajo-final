import './RoundButton.css'

const RoundButton = ({onClick, children, className}) => {
  return (
    <button onClick={onClick} className={'round-button ' + className}>
        {children}
    </button>
  )
}

export default RoundButton