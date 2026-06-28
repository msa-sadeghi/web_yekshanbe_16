export const initialState = {
  name: "",
  email: "",
  password: "",
  repassword: "",
  errors: {},
  isSubmitting: false,
};

export default function formReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET":
      return initialState;
  }
}
