import React from 'react';

class TodoForm extends React.Component {
  state = {
    error: undefined
  }

  handleAddTodo = (e) => {
    e.preventDefault();
    const todo = e.target.elements.theTodo.value.trim();
    console.log(todo)
    const error = this.props.handleAddTodo(todo); // sending the injected element back to the father function onSubmit and storing the eventual returned error message from the father method
    this.setState(() => ({error}))
    if (!error) {
      e.target.elements.theTodo.value = ''; //clear the input after the onSubmit fires
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddTodo} >
          <div className="form-group">
          <input
            className='m-5 form-control'
            name='theTodo'
            type="text"
            placeholder='write here your todo'/>
          <button
            className='btn btn-success m-5' >
            Add Todo
          </button>
          </div>
        </form>
      </div>
      )
    }
} 

export default TodoForm;