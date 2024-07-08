import { Route, Routes } from 'react-router-dom'
import Game from './pages/Game/Game'
import History from './pages/History/History'
import Home from './pages/Home/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/game' element={<Game />} />
      <Route path='/history' element={<History />} />
    </Routes>
  )
}

export default App
