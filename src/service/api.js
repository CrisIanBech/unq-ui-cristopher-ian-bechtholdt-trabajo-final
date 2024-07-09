import axios from "axios";

const apiURL = 'https://preguntados-api.vercel.app';
const urlQuestionsByDifficulty = apiURL + '/api/questions'
const urlAnswer = apiURL + '/api/answer'

const getQuestionsByDifficulty = async (difficulty) => {
    const response = await axios.get(urlQuestionsByDifficulty, {params: { difficulty: difficulty }});
    return response.data
}

const answerQuestion = async (questionId, answerId) => {
    const isCorrect = (await axios.post(urlAnswer, {questionId: questionId, option: answerId})).data
    return isCorrect.answer
}

export { answerQuestion, getQuestionsByDifficulty };

