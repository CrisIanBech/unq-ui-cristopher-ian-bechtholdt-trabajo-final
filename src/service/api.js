import axios from "axios";

const apiURL = 'https://preguntados-api.vercel.app';
const urlQuestionsByDifficulty = apiURL + '/api/questions'
const urlDifficulties = apiURL + '/api/difficulty'
const urlAnswer = apiURL + '/api/answer'

const getDifficulties = async () => {
    const response = (await axios.get(urlDifficulties)).data
    return response
}

const getQuestionsByDifficulty = async (difficulty) => {
    const response = await axios.get(urlQuestionsByDifficulty, {params: { difficulty: difficulty }});
    return response.data
}

const answerQuestion = async (questionId, answerId) => {
    const isCorrect = (await axios.post(urlAnswer, {questionId: questionId, option: answerId})).data
    return isCorrect.answer
}

export { answerQuestion, getDifficulties, getQuestionsByDifficulty };

