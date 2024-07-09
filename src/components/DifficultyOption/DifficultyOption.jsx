import { useMemo } from 'react'
import getDifficultyColor from '../../helpers/getDifficultyColor'
import './DifficultyOption.css'

const DifficultyOption = ({difficulty, difficultyInfo}) => {
  const { actual, max } = difficultyInfo
  const difficultyColor = useMemo(() => getDifficultyColor(actual, max - 1), [actual, max])

  const backgroundGradiant = `conic-gradient(
    ${difficultyColor} 0deg, ${difficultyColor} 30deg,
    transparent 30deg, transparent 120deg,
    ${difficultyColor} 120deg, ${difficultyColor} 150deg,
    transparent 150deg, transparent 240deg,
    ${difficultyColor} 240deg, ${difficultyColor} 270deg,
    transparent 270deg, transparent 360deg)`

  return (
    <> 
      <span className='difficulty-option-light-container'>
        <span style={{backgroundImage: backgroundGradiant}} className='difficulty-option-light' />
      </span>
      <h3 className='difficulty-option'>{difficulty}</h3>   
    </>
  )
}

export default DifficultyOption