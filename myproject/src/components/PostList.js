import React, { Component } from 'react'
import axios from 'axios'
import NewCompo from './NewCompo'

class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts:[], 
             myPost:[]
        }
    }


    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( res=> {
            // console.log(res.data)
            this.setState({
                posts:res.data,
                myPost:res.data.filter(i=> i.id < 11)
                
               
            })
            console.log('mypost is this',this.state.myPost)
            
        })
        
        
        .catch(res=> console.log('There is error'))
    }
    
    render() {

        const {posts,myPost} = this.state
        console.log(myPost)
        
        return (
            <div>
                List of Posts
                {
                    posts.length ?
                    posts.map(post=>  <div key={post.id}>{post.title} </div> ):null
                
                 }
                 {
                     myPost.map(individual=> <div key={individual.id}> <h2>{individual.title} </h2></div>)
                 }
    

                <NewCompo  />
               
           
            </div>
        )
    }
}

export default PostList
