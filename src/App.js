import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Task';

const tasks = [
  { name: 'Learn React', done: false },
  { name: 'Learn CSS', done: true },
  { name: 'Web development', done: true }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.initTasks();
  }

  initTasks() {
    return {
      tasks: tasks.map((task, index) => {
        return { ...task, id: index };
      })
    };
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.tasks.map(task => (
            <Task {...task} handleToggleStatus={this.handleToggleStatus.bind(this, task)} />
          ))}
        </ul>
        <button onClick={this.addNewTask.bind(this)}>Add new Task...</button>
      </div>
    );
  }

  handleToggleStatus(task) {
    this.setState({
      tasks: this.state.tasks.map(t => {
        if (t.id === task.id) {
          t.done = !t.done;
        }
        return t;
      })
    });
  }

  addNewTask() {
    this.setState({
      tasks: [...this.state.tasks, { name: 'New task... not editable yet', done: false, id: this.state.tasks.length }]
    });
  }
}

export default App;
