import React from 'react'
import Chart from './Chart'
import Title from './Title'

const QuestionResults = ({
    question,
    match
}) => 
    <div className="question-results container">
        <Title title="Question Results" description={question.question} />
        <Chart match={match} />
    </div>
    
export default QuestionResults
