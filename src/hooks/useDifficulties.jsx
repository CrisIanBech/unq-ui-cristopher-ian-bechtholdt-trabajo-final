import { useEffect, useState } from 'react'
import { getDifficulties } from '../service/api'

const initialDifficultiesState = {difficulties: null, hasError: false}

const useDifficulties = () => {
    const [difficultiesState, setDifficultiesState] = useState(initialDifficultiesState)
    const { difficulties, hasError } = difficultiesState

    useEffect(() => {
        fetchDifficulties()
    }, [])

    const fetchDifficulties = async () => {
        try {
            const difficulties = await getDifficulties()
            setDifficultiesState({difficulties: difficulties, hasError: false})
        } catch (error) {
            setDifficultiesState({difficulties: null, hasError: true})
        }
    }

    const retry = () => {
        setDifficultiesState(initialDifficultiesState)
        fetchDifficulties()
    }

  return ({difficulties, hasError, retry})
}

export default useDifficulties