import React, { useState} from 'react'

import { connect } from 'react-redux'
import { authUser, logout } from '../store/actions'
import { Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Register = ({ 
    authUser, 
    error, 
    isAuthenticated 
}) => {
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(username, password)
        authUser('register', {firstName, lastName, username, password})
        setUsername('')
        setPassword('')
        setPassword2('')
    }

    return  isAuthenticated
            ? <Redirect to='/' />
            : <>
                <Navbar />
                <div className='login container'>
                    <form onSubmit={handleSubmit} className=''>
                        <div className='input-field col s12'>
                            <input 
                                type='text' 
                                value={firstName} 
                                id='firstName' 
                                onChange={e => setFirstName(e.target.value)} 
                                autoComplete='off' 
                            />
                            <label for='firstName'>First Name</label>
                        </div>
                        <div className='input-field col s12'>
                            <input 
                                type='text' 
                                value={lastName} 
                                id='lastName' 
                                onChange={e => setLastName(e.target.value)} 
                                autoComplete='off' 
                            />
                            <label for='lastName'>Last Name</label>
                        </div>
                        <div className='input-field col s12'>
                            <input 
                                type='text' 
                                value={username} 
                                id='username' 
                                onChange={e => setUsername(e.target.value)} 
                                autoComplete='off' 
                            />
                            <label for='username'>Username</label>
                        </div>
                        <div className='input-field col s12'>
                            <input 
                                type='password' 
                                value={password} 
                                id='password' 
                                onChange={e => setPassword(e.target.value)} 
                                autoComplete='off'
                            />
                            <label for='password'>Password</label>
                        </div>
                        <div className='input-field col s12'>
                            <input 
                                type='password' 
                                value={password2} 
                                id='password2' 
                                onChange={e => setPassword2(e.target.value)} 
                                autoComplete='off'
                            />
                            <label for='password2'>Confirm Password</label>
                        </div>
                        <div className="input-field">
                            <button className='btn black'> Register <i className='material-icons right'>send</i> </button>
                            <div className="red-text center">                       
                                {error && <p> {error.message} </p>}
                            </div>
                        </div>
                    </form>
                </div>
            </>
}

export default connect(state => ({
    error: state.error.message,
    isAuthenticated: state.auth.isAuthenticated
}), 
{
    authUser, 
})(Register)
