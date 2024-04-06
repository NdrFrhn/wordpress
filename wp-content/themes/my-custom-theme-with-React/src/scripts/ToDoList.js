import React from 'react';
import TodoForm from './TodoForm';
import Todos from './Todos';

class ToDoList extends React.Component {
  state = {
    todos: []
  };

  handleAddTodo = (todo) => {
    if (todo === '' ) {
      return 'Please type something'
    } else if (this.state.todos.indexOf(todo) > -1) {
      return 'Enter a different todo'
    }
    this.setState( (prevState) => ({ todos: prevState.todos.concat(todo) }));
    console.log(this.state.todos)
  } 

  removeTodo = (todoToBeRemoved) => {
    console.log('Remove button clicked!', this.state.todos);
    this.setState ((prevState) => ({todos: prevState.todos.filter( (todo) => (todoToBeRemoved !== todo))}))
  }

  componentDidMount = () => {
    try {
      const json = localStorage.getItem('todos');
      const todos = JSON.parse(json);
      if (todos) {
        this.setState( () => ({todos}))
      }
    } catch(e) {
      // Don't do nothing!
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.todos.length !== this.state.todos.length) {
      const json = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', json);
    }
  }

  render () {
    return (
    <div className="container p-5">
      
      <Todos removeTodo={this.removeTodo} todos={this.state.todos} />
    
      <TodoForm handleAddTodo={this.handleAddTodo} />

    </div>
  )
 }
}

export default ToDoList;