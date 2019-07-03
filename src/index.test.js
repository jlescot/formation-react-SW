import reducers from './reducers';

describe('Reducers', () => {
  test('ADD_TODO', () => {
    let state;
    state = reducers(
      {
        todolist: {
          tasks: [
            { name: 'Learn React', done: false },
            { name: 'Learn CSS', done: true },
            { name: 'Web development', done: true }
          ]
        }
      },
      { type: 'ADD_TODO' }
    );
    expect(state).toEqual({
      todolist: {
        tasks: [
          { name: 'Learn React', done: false },
          { name: 'Learn CSS', done: true },
          { name: 'Web development', done: true },
          { name: 'New task... not editable yet', done: false }
        ]
      }
    });
  });

  test('TOGGLE_TODO_STATE', () => {
    let state;
    state = reducers(
      {
        todolist: {
          tasks: [
            { name: 'Learn React', done: false },
            { name: 'Learn CSS', done: true },
            { name: 'Web development', done: true },
            { name: 'New task... not editable yet', done: false }
          ]
        }
      },
      { type: 'TOGGLE_TODO_STATE', todoId: 2, todoState: false }
    );
    expect(state).toEqual({
      todolist: {
        tasks: [
          { name: 'Learn React', done: false },
          { name: 'Learn CSS', done: true },
          { name: 'Web development', done: false },
          { name: 'New task... not editable yet', done: false }
        ]
      }
    });
  });
});
