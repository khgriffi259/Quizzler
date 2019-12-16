import api from '../../services/api'
import { GET_QUESTIONS, GET_SINGLE_QUESTION } from '../actionTypes'
import { addError, removeError } from './error'
import { setCurrentUser } from './auth'

export const actionGetQuestions = questions => ({
    type: GET_QUESTIONS,
    questions
})

export const actionGetSingleQuestion = currentQuestion => ({
    type: GET_SINGLE_QUESTION,
    currentQuestion
})

export const getQuestions = questions => async dispatch => {
    //make api call to backend
    try {
        const questions = await api.call('get', 'quiz')
        dispatch(actionGetQuestions(questions))
        dispatch(removeError())
    } catch (err) {
        const { message } = err.response.data
        dispatch(addError(message))
    }
}

export const getSingleQuestion = questionId => async dispatch => {
    try {
        const currentQuestion = await api.call('get', `quiz/${questionId}`)
        dispatch(actionGetSingleQuestion(currentQuestion))
        dispatch(removeError())
    } catch (err) {
        const { message } = err.response.data
        dispatch(addError(message))
    }
}

export const getUserQuestions = () => async dispatch => {
    try {
        const userQuestions = await api.call('get', `questions/user`)
        dispatch(actionGetQuestions(userQuestions))
        dispatch(removeError())
    } catch (err) {
        const { message } = err.response.data
        dispatch(addError(message))
    }
}

export const vote = (id, answer, history) => async dispatch => {
    try {
        const question = await api.call('post', `quiz/${id}`, answer)
        dispatch(getSingleQuestion(question._id))
        dispatch(removeError())
        history.push(`/questions/results/${question._id}`)
    } catch (err) {
        const { message } = err.response.data
        dispatch(addError(message))
    }
}