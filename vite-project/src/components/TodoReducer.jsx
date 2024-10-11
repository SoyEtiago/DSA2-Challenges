export const TodoReducer = (initialState, action) => {
  switch (action.type) {
    case 'ABC':
      throw new Error('Action not yet implemented');
      break;
    case 'Agregar TODO':
      return [...initialState, action.payload]
    default:
      return initialState;
  }
}