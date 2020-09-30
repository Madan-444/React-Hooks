import React from 'react'




function FunctionClick() {
    function clickHandler(){
        console.log('The click Button is clicked')
    }
    
    return (
        <div>
            <button onClick = {clickHandler} > Click </button>
        </div>
    )
}

export default FunctionClick
