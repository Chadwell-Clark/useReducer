import React, {useReducer, useState} from "react";
import './App.css';
import {Todo} from "./Todo.js"

 export const ACTIONS = {
  ADD_TODO: 'add-Todo',
  TOGGLE_TODO: 'toggle-Todo',
  DELETE_TODO: 'delete-Todo'
}

function reducer(todos, action) {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
       return todos.map(todo => {
         if (todo.id === action.payload.id) {
           return {...todo, complete: !todo.complete } 
         }
         return todo
       })
    case ACTIONS.DELETE_TODO:
         return todos.filter(todo => todo.id  !== action.payload.id)
       default: 
       return todos
  }
}

const newTodo =(name) => {
  return{ id: Date.now(), name: name, complete: false }
}
export const App =() => {
 const [todos, dispatch] = useReducer(reducer, [])
 const [name, setName] = useState('')

  
  const handleSubmit = (e) => {
    e.preventDefault()
//   ***  dispatch type: what we are going to do(actions) with payload (parameters)
    dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}})
    setName('')
  }

  console.log(todos)
  return (
    <>
      <div className="counter">
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </form>
    {todos.map(todo => {
      console.log("map", todo)
       return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
    })}
    </div>
    </>
  );
}


