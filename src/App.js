import React from 'react';
import './App.css';
import Task from './Task';
import { connect } from 'react-redux';
import { addTodo, toggleTodoState } from './actions/todolist';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ul>
          {this.props.tasks.map((task, index) => (
            <Task {...task} handleToggleStatus={() => this.props.toggleTodoState(index, !task.done)} />
          ))}
        </ul>
        <button onClick={() => this.props.addTodo()}>Add new Task...</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.todolist.tasks
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleTodoState }
)(App);
