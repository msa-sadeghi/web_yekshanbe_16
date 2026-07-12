import { useReducer } from "react";
import initialState, { formReducer } from "./formReducer";
export default function RegistrationForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (field, value) => {
    dispatch({ type: "SET_FIELD", field, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!state.name) errors.name = "name can not be empty";
    if (!state.email) errors.email = "email can not be empty";
    if (state.password !== state.confirmPassword) {
      errors.confirmPassword = "confirm password is not the  same as password";
    }
    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors });
    }
  };
  return (
    <div>
      <h3>RegistrationForm</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={state.name}
          onChange={(e) => handleChange("name", e.target.value)}
          type="text"
          placeholder="name"
        />
        {state.errors.name && <span>{state.errors.name}</span>}
        <br />
        <input
          value={state.email}
          onChange={(e) => handleChange("email", e.target.value)}
          type="email"
          placeholder="email"
        />
        {state.errors.email && <span>{state.errors.email}</span>}
        <br />
        <input
          value={state.password}
          onChange={(e) => handleChange("password", e.target.value)}
          type="password"
          placeholder="password"
        />
        <br />
        <input
          value={state.confirmPassword}
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
          type="password"
          placeholder="confirm password"
        />
        {state.errors.confirmPassword && (
          <span>{state.errors.confirmPassword}</span>
        )}
        <br />
        <button type="submit">register</button>
        <button type="button" onClick={() => dispatch({ type: "RESET" })}>
          reset
        </button>
      </form>
    </div>
  );
}
