import Button, { variants } from '../Button/Button'

const Alert = ({description, onPrimaryPress, onSecondaryPress, onPrimaryContent="Aceptar", onSecondaryContent="Cancelar", title}) => {
  return (
    <div className='alert-background'>
        <div className='alert-container'>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className='alert-buttons-container'>
                <Button onClick={onSecondaryPress} content={onSecondaryContent} />
                <Button onClick={onPrimaryPress} content={onPrimaryContent} variant={variants.validation} />
            </div>
        </div>
    </div>
  )
}

export default Alert