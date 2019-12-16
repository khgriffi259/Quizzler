import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Pie } from 'react-chartjs-2'
import { getSingleQuestion } from '../store/actions'
import { connect } from 'react-redux'

const Chart = ({
    currentQuestion,
    match: {
        params: {
            id
        }
    },
    getSingleQuestion
}) => {
    
    useEffect(() => {
        getSingleQuestion(id)
    },[])

    const color = () => {
       return (`#${Math.random().toString(16).slice(2,8)}`)
    }
  
    const data = question => ({
        // labels: question.options.map(({option}) => option),
        labels: question.results.map(({result}) => result),
        datasets: [
            {
                label: question.question,
                backgroundColor: question.options.map(option => color()),
                //    backgroundColor: question.options.map(option => '#0a1173'),
                borderColor: '#323643',
                // data: question.options.map(({votes}) => votes)
                data: question.results.map(({count}) => count)
            }
        ]
    })
    
    return Object.keys(currentQuestion).length
            ? <Pie data={data(currentQuestion)} />
            : <div> Loading...</div>
}

export default connect(state => ({
    currentQuestion: state.question.currentQuestion
}), {
    getSingleQuestion
})(Chart)
