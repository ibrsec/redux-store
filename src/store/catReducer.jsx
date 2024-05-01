const initialState = {
  cat: "",
};

const change = "CHANGE";

export const changeCat = (payload) => ({type:change,payload})

export const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case change:
      return {cat:action.payload};
    default:
      return state;
  }
};
