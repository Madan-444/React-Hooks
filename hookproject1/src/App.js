import React, {useState,useReducer} from 'react';
import './App.css';
import Todo from './Todo'


 export const ACTIONS = {
  ADD_TODO: 'add_todo',
  TOGGLE_TODO:'toggle',
  DELETE_TODO:'delete'

}

const reducer = (todos,action)=> {
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return [...todos,newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id){
          return {...todo,complete:!todo.complete}
        }
        return todo
      })
      case ACTIONS.DELETE_TODO: 
         return todos.filter(todo=> todo.id !== action.payload.id)
      default:
        return todos
  }

}

function newTodo(name){
  return {id: Date.now(),name:name,complete:true}
}


function App() {
  

  const [todos,dispatch] = useReducer(reducer, [])
  const [name,setName] = useState('')

  console.log(todos)

  return (
    <div className="App">
      <form onSubmit = {(e)=> {
        e.preventDefault()
        dispatch({type:ACTIONS.ADD_TODO,payload: {name:name}})
        setName('')
      }}>
        <input type='text' value={name} onChange= {e=> setName(e.target.value)} />
      </form>
      {todos.map(todo=> 
        <Todo key={todo.id} todo = {todo} dispatch = {dispatch} />
        )
      }
    </div>
  );
}

export default App;
