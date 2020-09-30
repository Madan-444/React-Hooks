import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    

    increment(){

        // console.log('There is increments')
        this.setState({
            count:this.state.count+1
        },()=> {
            console.log('Callback Value is:', this.state.count)
        })
        console.log(this.state.count)

    }
    decrement(){
        this.setState({
            count: this.state.count -1
        })
        

    }
    
    render() {
    
        return (
            <div>
                <h4>count - {this.state.count}</h4>
                <button onClick= {()=> this.increment()}> Increment</button>
                <button onClick={()=> this.decrement()}>Decrement</button>
                
                
            </div>
        )
    }
}

export default Counter
