import './EmptyList.css'

const EmptyList = ({message}) => {
  return (
    <p className='empty-list'>{message}</p>
  )
}

export default EmptyList