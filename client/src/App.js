import React from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'materialize-css/dist/css/materialize.css'

import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import QuestionDetailsPage from './pages/QuestionDetailsPage'
import QuestionResultsPage from './pages/QuestionResultsPage'


const App =() =>  <Switch>
                    <Route exact path="/"component={Home}/>
                    <Route exact path="/login"component={Login}/>
                    <Route exact path="/register"component={Register}/>
                    <Route exact path="/questions/:id"component={QuestionDetailsPage}/>
                    <Route exact path="/questions/results/:id"component={QuestionResultsPage}/>
                  </Switch>

export default App
