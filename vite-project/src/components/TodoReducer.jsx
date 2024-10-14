export const TodoReducer = (initialState, action) => {
  switch (action.type) {
    case 'ABC':
      throw new Error('Action not yet implemented');
      break;
    case '[TODO] ADD TODO':
      return [...initialState, action.payload]
    default:
      return initialState;
  }
}