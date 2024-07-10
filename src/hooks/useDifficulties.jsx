import { useEffect, useState } from 'react'
import { getDifficulties } from '../service/api'

const useDifficulties = () => {
    const [difficulties, setDifficulties] = useState(null)
    
    useEffect(() => {
        fetchDifficulties()
    }, [])

    const fetchDifficulties = async () => {
        const difficulties = await getDifficulties()
        console.log(difficulties);
        setDifficulties(difficulties)
    }

  return ({difficulties})
}

export default useDifficulties