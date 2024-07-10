import AppIcon, { sizes } from '../AppIcon/AppIcon'
import './Loading.css'

const Loading = () => {
  return (
   <div className='loader'>
        <AppIcon size={sizes.s} />    
        <p className='loading-message'>Cargando...</p>
   </div>
  )
}

export default Loading