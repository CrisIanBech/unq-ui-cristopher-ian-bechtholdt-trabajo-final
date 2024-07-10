import AppIcon, { sizes } from '../AppIcon/AppIcon'
import Button, { variants } from '../Button/Button'
import './Error.css'

const Error = ({ onRetry }) => {
  return (
    <div className='error-container'>
        <AppIcon size={sizes.s} />
        <p>Ha ocurrido un error</p>
        <Button onClick={onRetry} content='Reintentar' variant={variants.validation} />
    </div>
  )
}

export default Error