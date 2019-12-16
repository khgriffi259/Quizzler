import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { getQuestions, getSingleQuestion } from '../store/actions'
import QuestionList from '../components/QuestionList'

const Home = ({
    isAuthenticated, 
    getQuestions, 
    questions
}) => {

    useEffect(() => {
        getQuestions()
    }, [])

    return isAuthenticated
        ?   <>
                <Navbar />
                <QuestionList questions={questions}/>
            </>
        : <Redirect to='/login' />
}

export default connect(state => ({
    isAuthenticated: state.auth.isAuthenticated,
    questions: state.question.questions
}),{
    getQuestions,
})(Home)
