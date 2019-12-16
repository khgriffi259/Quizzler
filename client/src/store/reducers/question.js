import { GET_QUESTIONS, GET_SINGLE_QUESTION } from '../actionTypes'

const initState = {
    questions: [],
    currentQuestion: {}
}

const questionReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            return {...state, questions: action.questions}
        case GET_SINGLE_QUESTION:
            return {...state, currentQuestion: action.currentQuestion}
        default:
            return state
    }
}

export default questionReducer