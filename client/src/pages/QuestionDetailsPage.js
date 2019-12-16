import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'
import QuestionDetails from '../components/QuestionDetails'
import Login from './Login'
import Error from '../components/Error'

const QuestionDetailsPage = ({ 
    question,
    isAuthenticated,
    history
}) => 
    isAuthenticated 
    ?   <>
        <Navbar />
        <div className="question-details container">
            <Error /> 
            <QuestionDetails question={question} history={history} />
        </div>
        </>
    : <Login />

export default connect((state, ownProps) => {
    const id = ownProps.match.params.id
    const questions = state.question.questions
    const question = questions.find(question => question._id === id)
    return {
        question,
        isAuthenticated: state.auth.isAuthenticated
    }

}, null)(QuestionDetailsPage)
