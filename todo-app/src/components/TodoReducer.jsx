export const TodoReducer = (initialState, action) => {
  switch (action.type) {
    case 'ABC':
      throw new Error('Action not yet implemented');
      break;
    case '[TODO] ADD TODO':
      return [...initialState, action.payload]
    case '[TODO] REMOVE TODO':
      return initialState.filter(todo => todo.id !== action.payload.id);
    case '[TODO] TOGGLE TODO':
      return initialState.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return initialState;
  }
}