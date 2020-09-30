import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        // General if else operator we should care that if else not work in jsx
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Madan Rijal</div>
        // }
        // else {
        //     return <div>Welcome Guest</div>
        // }
       
        return(
            // Conditional Operator
            // this.state.isLoggedIn ?
            // <div>Welcome Madan</div> :
            // <div>Welcome Guest</div>

            // ternary operator
            this.state.isLoggedIn && <div>Welcome magdan</div>
            
        )
    }
}

export default UserGreeting
