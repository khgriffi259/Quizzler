import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store/actions'
import M from 'materialize-css'

const SignedInLinks = ({
    initials,
    logout
}) => {
     
    useEffect(() => {
        M.AutoInit();
    })
    
     return <>
        <ul className="right">
            <li>
                <a className="dropdown-trigger"  data-target="dropdown1"> 
                    <span className="btn btn-floating yellow black-text"> {initials}</span>
                    <i className="material-icons right">arrow_drop_down</i>
                </a>
            </li>
        </ul>
    
        <ul id="dropdown1" className="dropdown-content">
            <li><Link to="#" className="black-text">Profile</Link></li>
            <li className="divider black-text"></li>
            <li><a onClick={logout} className="black-text">Logout</a></li>
        </ul>
     </>
    }

export default connect(state => ({
    initials: state.auth.currentUser.initials
}), {
    logout
})(SignedInLinks)
