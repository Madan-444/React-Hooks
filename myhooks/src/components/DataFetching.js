import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [post,setPost]= useState({})
    const [id,setId]= useState(0)
    const [idFromBtn,setIdFromBtn] = useState(0)

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=> {
            // console.log(res.data)
            setPost(res.data)
        } )
        .catch((err)=> console.log('There is error',err))
    },[idFromBtn])
    console.log(post)
    return (

        <div>
            
            <input type='text' value={id} onChange={(e)=> setId(e.target.value)} />
            <button type='button' onClick={()=> setIdFromBtn(id)} >Request</button>
         

            <div> {post.title} </div>
            {/* {
               
                posts.map((post)=> <li key={post.id}><h2 > {post.title} </h2></li> )

            } */}
        </div>
    )
}

export default DataFetching
