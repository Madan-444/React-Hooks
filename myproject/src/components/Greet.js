import React from 'react'

// function Greet(){
//     return (<div>
//         <h1>Hello madan Rijal 
//             How are you??
//         </h1>
//     </div>)
// }

const Greet = (props)=> {
    console.log(props)
    return ( 
    
    <div>
        <h1>Hello {props.name} also known as {props.heroname} </h1>
        {props.children}
    </div>    )
}


export default Greet