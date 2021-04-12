import React from 'react'
import {ACTIONS} from "./App.js"

export const Todo = ({todo, dispatch})  => {
    console.log(todo.name)
    return (
      <div>
        <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
          {todo.name}
        </span>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        >
          {" "}
          TOGGLE{" "}
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          {" "}
          DELETE{" "}
        </button>
      </div>
    );
}
