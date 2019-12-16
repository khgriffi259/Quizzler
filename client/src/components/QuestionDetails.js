import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { vote } from '../store/actions'
import Title from './Title'

const QuestionDetails = ({
    question: {
        question, 
        options,
        _id
    } = {},
    question: questionObject,
    vote,
    history
}) => {  
    
    const handleVote = async e => {
        const answer = e.target.innerText
        vote(_id, { answer }, history)
    }

    return Object.keys(questionObject).length
        ?   <>
            <Title title="Question:" description={question} />
            <ul className="collection">
                {options.map(({option}, i) => 
                    <a onClick={handleVote} key={i}className="collection-item question-text black-text">
                        {option}
                    </a>
                )}
            </ul>
            </>
        : <Redirect to="/" />

}

export default connect(state => ({
    // mapstatetoprops
}), {
    vote
})(QuestionDetails)
