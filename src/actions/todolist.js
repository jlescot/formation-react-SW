export function toggleTodoState(todoId, todoState) {
  return { type: 'TOGGLE_TODO_STATE', todoId, todoState };
}

export function addTodo() {
  return { type: 'ADD_TODO' };
}
