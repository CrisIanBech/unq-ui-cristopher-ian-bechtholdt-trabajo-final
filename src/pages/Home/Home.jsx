import { Link } from 'react-router-dom'
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
          <Link to={"/game"}>
            <Button content={"jugar"} />
          </Link>
          <Link to={"/history"}>
            <Button content={"historial"} />
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Home