import React,{useState,useEffect} from 'react'

function HookCounterOne() {

    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(()=> {

        console.log('useEffect-Updating document title')
        document.title = `YOu clicked ${count} times`
    },[count])
    return (
        <div>

            <input type='text' value={name} onChange={(e)=> setName(e.target.value)} />
            <button onClick={()=> setCount(count +1)}> Click {count} tiemes </button>
        </div>
    )
}

export default HookCounterOne
