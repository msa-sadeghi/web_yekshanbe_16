import { useReducer } from "react";
import formReducer, { initialState } from "./formReducer";
export default function RegistrationForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state.name);
    console.log(state.email);
  };
  const handleChange = (field, value) => {
    dispatch({ type: "SET_FIELD", field, value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={state.name}
        onChange={(e) => handleChange("name", e.target.value)}
        type="text"
        placeholder="name"
      />
      <br />
      <input
        value={state.email}
        onChange={(e) => handleChange("email", e.target.value)}
        type="email"
        placeholder="email"
      />
      <br />
      <input
        value={state.password}
        onChange={(e) => handleChange("password", e.target.value)}
        type="password"
        placeholder="password"
      />
      <br />
      <input
        value={state.repassword}
        onChange={(e) => handleChange("repassword", e.target.value)}
        type="repassword"
        placeholder="repassword"
      />
      <br />
      <button type="submit">register</button>
      <button>reset</button>
    </form>
  );
}
