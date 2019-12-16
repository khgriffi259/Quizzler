import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import M from 'materialize-css'

const SignedOutLinks = ({
    
}) => {
    
    useEffect(() => {
        M.AutoInit();
    })

    return <>
            <ul className="right">
                <li>
                    <a className="dropdown-trigger" data-target="dropdown1"> 
                    <i className="fas fa-key"></i> <i className="material-icons right">arrow_drop_down</i>
                    </a>
                </li>
            </ul>
        
            <ul id="dropdown1" className="dropdown-content">
                <li><Link to="/login" className="black-text">Login</Link></li>
                <li><Link to="/register" className="black-text">Register</Link></li>
            </ul>
        </>
}

export default connect(state => ({
    //mapStateToProps
}), {
    //mapDispatchToProps
})(SignedOutLinks)
