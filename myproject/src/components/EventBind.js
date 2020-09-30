import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello Madan'
        }
    }
    // clickHandler(){
    //     this.setState({
    //         message:'Goodbye Madan'
    //     })
    //     console.log(this)
    // }

    clickHandler = ()=> {
        this.setState({
            message: 'byebye!'
        })
    }
    
    render() {
        return (
            <div>
                <h2> {this.state.message} </h2>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={()=> this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
                
            </div>
        )
    }
}

export default EventBind
