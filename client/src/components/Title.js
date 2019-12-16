import React from 'react'

const Title = ({
    question,
    description
}) => 
   <div className="card grey darken-2">
        <div className="card-content white-text poll-text">
            <span className="card-title poll-text">
                Question:
            </span>
            <p className="title-text">{description}</p>
        </div>
    </div>

export default Title
