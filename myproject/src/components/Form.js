import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'',
             comments:'',
             skill:''
        }
    }
    changeMessage = (event)=> {
        this.setState({
            message: event.target.value
        })
        // event.preventDefault()
        // console.log(this.state.message)
    }
    changeComments = (event)=> {
        
        this.setState({
            comments:event.target.value
        })
        // event.preventDefault()
    }
    
    selectHandler = (event)=> {
        this.setState({
            skill:event.target.value
        })

    }
    handleSubmit= (event)=> {
        alert(`Your Name is ${this.state.message} and Comment is ${this.state.comments}. You have ${this.state.skill} skill.`)
    }
    
    render() {
        const {message,comments,skill} =this.state
        return (
            <form>
                <div>
                    <label>Username </label>
                    
                    <input type='text' value={message} onChange={this.changeMessage} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value= {comments} onChange={this.changeComments} ></textarea>
                </div>

                <div>
                    <label><h2>Select One</h2></label>
                    <select value={skill} onChange={this.selectHandler}>
                        <option>React Js</option>
                        <option>Angular Js</option>
                        <option>Vue js</option>
                    </select>
                </div>



                <button onClick= {this.handleSubmit}><h4>Submit</h4></button>
            </form>
        )
    }
}

export default Form
