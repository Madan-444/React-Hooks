import React, {useState,useReducer} from 'react';
import './App.css';


const ACTIONS = {
  INCREMENT:'increment',
  DECREMENT:'decrement'

}

const reducer = (state,action)=> {
  switch(action.type) {
    case ACTIONS.INCREMENT:
      return {count:state.count +1}
    case ACTIONS.DECREMENT: 
      return { count: state.count -1}
    default: 
      return state
  }

}

function App() {

  const [state,dispatch] = useReducer(reducer, {count:0})

  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <>
      <button onClick = {()=> dispatch({type:ACTIONS.INCREMENT})} >+</button>
      <span> {state.count} </span>
      <button onClick ={()=> dispatch({type:ACTIONS.DECREMENT})} >-</button>
     
      
      </>
    </div>
  );
}

export default App;
