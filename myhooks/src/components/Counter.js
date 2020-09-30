import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    handleChange = ()=> {
        this.setState({
            count:this.state.count+1
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleChange}>Increment {this.state.count} </button>
            </div>
        )
    }
}

export default Counter
