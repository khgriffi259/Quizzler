import React, { useState} from 'react'

import { connect } from 'react-redux'
import { authUser, logout } from '../store/actions'
import { Redirect } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Error from '../components/Error'

const Login = ({ 
    authUser, 
    error, 
    isAuthenticated 
}) => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(username, password)
        authUser('login', {username, password})
        setUsername('')
        setPassword('')
    }
    return  isAuthenticated
            ? <Redirect to='/' />
            : <>
                <Navbar />
                <div className='login container'>
                    <Error />
                    <form onSubmit={handleSubmit} className='section'>
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
                        <div className="input-field">
                            <button className='btn black'> 
                                Login 
                                <i className='material-icons right'>send</i> 
                            </button>
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
})(Login)
