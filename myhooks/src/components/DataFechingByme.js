import Axios from 'axios'
import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFechingByme() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(0)
    const [idFromBtn,setIdFromBtn] = useState(0)

    useEffect(()=> {
    
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=> {
            console.log(res.data)
            setPost(res.data)
        })
        .catch(err=> console.log('error',err))

    },[idFromBtn])
    return (
        <div>
            <input type='text' value={id} onChange={(e)=> setId(e.target.value)} />
            <button type='button' onClick={()=> setIdFromBtn(id)}> Fetch Data </button>

            <div>
                
                <h2> {post.title} </h2>
            </div>
        </div>
    )
}

export default DataFechingByme
