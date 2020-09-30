import React, {Component} from 'react'


class Message extends Component {

    constructor(){
        super()
        this.state= {
            message: 'Welcome Madan Rijal'
        }
        
    }
     changeMessage(){
        this.setState({
            message:' Thank you for subscribing'
        })
    }

    
    render(){
    return (
        <div>
            <h1> {this.state.message}</h1>
            {/* <h1>Welcome Madan Rijal</h1> */}
            <button onClick={()=> this.changeMessage()} >Subscribe</button>
        </div>
    )
    }

}

export default Message