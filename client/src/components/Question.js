import React from 'react'
import { Link } from 'react-router-dom'

const Question = ({ 
    question: {
        question,
        _id 
    }
}) =>  <li className="collection-item">
        <div >
            <span className="question-text">{question}</span>
            <Link to={`/questions/results/${_id}`} className="secondary-content black-text">
                <span className="secondary-content black-text question-icon center">
                    <i className="fas fa-chart-bar fa-2x"></i>
                </span>
            </Link>   
            <Link to={`/questions/${_id}`} className="secondary-content black-text">
                <span className="secondary-content black-text question-icon center">
                    <i className="material-icons secondary-content black-text">send</i>
                </span>
            </Link>
        </div>
    </li>

export default Question