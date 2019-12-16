import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../store/actions'
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = ({
    logout,
    isAuthenticated,
}) => 
    <nav>
        <div className="nav-wrapper black">
            <div className="container">
                <Link to="/" className="brand-logo">QuizTime!</Link>
                {isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />}
            </div>
        </div>
    </nav>
              
export default connect(state =>({
    isAuthenticated: state.auth.isAuthenticated,
    username: state.auth.currentUser.username
}), {
    logout
})(Navbar)
