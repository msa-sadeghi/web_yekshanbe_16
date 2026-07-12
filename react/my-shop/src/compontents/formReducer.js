const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: {},
};
export default initialState
export function formReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: null },
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };
    case "RESET":
      return initialState;

    default:
        return state
  }
}
