import React from 'react'
import Question from './Question'

const QuestionList = ({ 
    questions 
}) =>
    <div className="question-list container">
        <h3 className="header">Questions</h3>
        <ul className="collection">
            {questions.map(question => 
                <Question key={question._id} question={question}/>
            )}
        </ul>
    </div>

export default QuestionList