import React from 'react'

function Person({detail}) {
    
    console.log('This is Person component')
    return (
        <div>
            <h1> My name is { detail.name} and i am {detail.age} years old. I love {detail.skill} </h1>
        </div>
    )
}

export default Person
