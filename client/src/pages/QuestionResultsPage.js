import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'
import QuestionDetails from '../components/QuestionDetails'
import Login from './Login'
import Error from '../components/Error'
import Chart from '../components/Chart'
import { Redirect } from 'react-router-dom'
import QuestionResults from '../components/QuestionResults'

const QuestionResultsPage = ({ 
    question,
    isAuthenticated,
    match
}) => 
    !isAuthenticated 
    ?   <Redirect to="/login" />
    :   !question
    ?   <Redirect to="/" />
    :   <>
        <Navbar />
        <QuestionResults question={question} match={match} />
        </>


export default connect((state, ownProps) => {
    const id = ownProps.match.params.id
    const questions = state.question.questions
    const question = questions.find(question => question._id === id)
    return {
        question,
        isAuthenticated: state.auth.isAuthenticated
    }
}, null)(QuestionResultsPage)
