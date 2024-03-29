import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib, faTrash } from '@fortawesome/free-solid-svg-icons'



class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      value: "",
      editing: false,
      currentid: "",
      currentValue: "",
    };
  }
  onChange = (e) => {
    this.setState({ value: e.target.value });
  };
  onAddTask = (e) => {
    e.preventDefault();

    const obj = {
      name: this.state.value,
      id: Date.now(),
    };
    if (this.state.value !== "") {
      this.setState({ todos: this.state.todos.concat(obj) });
      this.setState({ value: "" });
    }
  };

  onDeleteTask = (itemId) => {
    this.setState({
      todos: [...this.state.todos].filter((id) => id.id !== itemId),
    });
  };

  onEditTodo = (id, newValue) => {
    this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.name = newValue;
      }
      return("")
    });
  };

  onSubmitEditTodo = (e) => {
    e.preventDefault();

    this.onEditTodo(this.state.currentid, this.state.currentValue);
    this.setState({ editing: false });
  };

  onToggleEdit = (todo) => {
    this.setState({ editing: true });
    this.setState({ currentid: todo.id });
    this.setState({ currentValue: todo.name });
  };

  onEditInputChange = (e) => {
    this.setState({ currentValue: e.target.value });
  };

  render() {
    const mylist = this.state.todos.map((todo) => (
      <li className="todo_item">
        {todo.name}

        <button className='edit-button' onClick={() => this.onToggleEdit(todo)}><FontAwesomeIcon icon={faPenNib} /></button>
        <button className='del-button' onClick={() => this.onDeleteTask(todo.id)}><FontAwesomeIcon icon={faTrash} /></button>
      </li>
    ));

    return (
      <>
        <div className="App">
          {this.state.editing === false ? (
            <form onSubmit={this.onAddTask}>
              <input
                placeholder="Enter Your Task"
                value={this.state.value}
                onChange={this.onChange}
              />
              <button onClick={this.onAddTask}>Add Task</button>
            </form>
          ) : (
            <form onSubmit={this.onSubmitEditTodo}>
              <input
                placeholder="edit your task"
                value={this.state.currentValue}
                name={this.state.currentValue}
                onChange={this.onEditInputChange}
              />
              <button type='button' className='add-button' onClick={this.onSubmitEditTodo}>Update Item</button>
            </form>
          )}

          <ul className="todo_wrapper">{mylist}</ul>
        </div>
      </>
    );
  }
};




export default App;
