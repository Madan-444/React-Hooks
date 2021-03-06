import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
             body:''
        }
    }

    changeHandler = (event)=> {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    submithandler= (e)=> {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then((res)=> {
            console.log(res)

        })
        .catch(err=> console.log(err))

    }
    
    render() {
        const { userId,title,body} = this.state
        return (
            <form onSubmit = {this.submithandler}>
                <div > 
                    <input type='text' name= 'userId' value={userId} onChange={this.changeHandler} />
                </div>
                <div > 
                    <input type='text' name= 'title' value={title} onChange={this.changeHandler} />
                </div>
                <div > 
                    <input type='text' name= 'body' value={body} onChange={this.changeHandler} />
                </div>

                <button type='submit'> Submit</button>
            </form>
        )
    }
}

export default PostForm
