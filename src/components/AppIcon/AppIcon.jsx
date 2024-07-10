import './AppIcon.css'

const sizes = {
  xl: {roulette: {width: '230px', height: '230px'}, head: {width: '154px', height: '186px'}},
  m: {roulette: {width: '56px', height: '56px'}, head: {width: '30px', height: '34px'}},
  s: {roulette: {width: '56px', height: '56px'}, head: {width: '30px', height: '34px'}}
}

const AppIcon = ({size = sizes.xl}) => {
  return (
    <div style={size.roulette} className='app-icon-container'>
        <div style={size.roulette} className='app-icon-roulette' />
        <img style={size.head} className='app-icon' src="/PreguntadosIconoCara.png" />
    </div>
  )
}

export default AppIcon
export { sizes }

