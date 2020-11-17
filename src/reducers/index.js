const initialState = {
  lessons: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LESSONS_LOADED':
      return {
        lessons: action.payload
      };
    default:
      return state;
  }
}

export default reducer;