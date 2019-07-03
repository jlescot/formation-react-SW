import _ from 'lodash';

const initialTasks = [
  { name: 'Learn React', done: false },
  { name: 'Learn CSS', done: true },
  { name: 'Web development', done: true }
];

function todolist(state = { tasks: initialTasks }, action) {
  switch (action.type) {
    case 'TOGGLE_TODO_STATE':
      const newState = {
        ...state,
        tasks: [...state.tasks]
      };
      newState.tasks[action.todoId].done = !newState.tasks[action.todoId].done;
      return newState;
    case 'ADD_TODO':
      return {
        ...state,
        tasks: [...state.tasks, { name: 'New task... not editable yet', done: false }]
      };
    default:
      return state;
  }
}
export default todolist;
