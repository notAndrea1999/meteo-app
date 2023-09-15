const initialState = {
  meteo: [],
  multipleDays: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_METEO":
      return { ...state, meteo: action.payload };
    case "SET_MULTIPLE_DAYS":
      return { ...state, multipleDays: action.payload };
    default:
      return state;
  }
};

export default mainReducer;
