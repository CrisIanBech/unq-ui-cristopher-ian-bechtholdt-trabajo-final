import { useState } from 'react'
import { getAll } from '../helpers/historyDAO'

const useHistory = () => {

  const [history, setHistory] = useState(getAll())

  return { history }
}

export default useHistory