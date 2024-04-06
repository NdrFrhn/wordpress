import React from 'react';

const Todos = (props) => (
  <div className="container">
    <ul className='list-group'>
      {
        props.todos.map((todo) => (
            <li className='list-group-item' key={todo}>
              {todo}
            <button 
              className='btn btn-outline-danger ml-3'
              onClick={ () => (props.removeTodo(todo))} >
              Remove Todo!
            </button>
            </li>
        ))
      }
    </ul>
  </div>
)

export default Todos;