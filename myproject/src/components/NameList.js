import React from 'react'
import Person from './Person'

function NameList() {
    
    const persons = [
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Clark',
            age:25,
            skill:'Angular'
        },
        {
            id:3,
            name:'Diana',
            age:28,
            skill:'View'
        }
    ]
    const nameList = persons.map(jj=> <Person detail = {jj} />)
    console.log(nameList[0])
    // const ageList = persons.map(jj=> <h1> {jj.age} </h1>)
    // const skillList = persons.map(jj=> <h1> {jj.skill} </h1>)
   
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
