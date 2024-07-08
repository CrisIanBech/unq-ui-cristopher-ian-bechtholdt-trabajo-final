import AppIcon from '../../components/AppIcon/AppIcon'
import AppTitle from '../../components/AppTitle/AppTitle'
import Button from '../../components/Button/Button'
import './Home.css'

const Home = () => {
  return (
    <main className="home-page">
      <div className='home-page-content'>
        <AppTitle />
        <AppIcon />
        <div className='home-page-buttons-container'>
          <Button content={"jugar"} />
          <Button content={"historial"} />
        </div>
      </div>
    </main>
  )
}

export default Home