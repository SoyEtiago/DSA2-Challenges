export const TodoReducer = (initialState, action) => {
  switch (action.type) {
    case 'ABC':
      throw new Error('Action not yet implemented');
      break;
    default:
      return initialState;
  }
}