import React from 'react'
import { connect } from 'react-redux'

const Error = ({
    error
}) => 
    error
    ?   <div className="container">
            <div className="error red white-text center">
                { error }
            </div>
        </div>
    : null

export default connect(store => ({error: store.error.message}))(Error)
