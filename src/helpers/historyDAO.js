import { get as getAPI, save as saveAPI } from '../helpers/persistApi'

const PREGUNTADOS_HISTORY_KEY = "PREGUNTADOS_HISTORY_KEY"

const save = (game) => {
    let allGames = getAll()
    const hasAlreadySavedGame = allGames.some(playedGame => playedGame.id === game.id)
    if(hasAlreadySavedGame) {
        allGames = allGames.map(playedGame => playedGame.id === game.id ? game : playedGame) 
    } else {
        allGames.push(game)
    }
    saveAPI(PREGUNTADOS_HISTORY_KEY, allGames)
}

const getAll = () => {
    return getAPI(PREGUNTADOS_HISTORY_KEY) || []
}

export { getAll, save }

