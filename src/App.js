import "./styles.css";
import { useState } from "react";

export default function App() {
  const [fullName, setFullName] = useState({ fname: "", lname: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setFullName({
      ...fullName,
      [event.target.name]: value,
    });
  };
  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            onChange={handleChange}
            value={fullName.fname}
            name="fname"
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            onChange={handleChange}
            value={fullName.lname}
            name="lname"
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {submitted ? (
        <p>
          Full Name: {fullName.fname} {fullName.lname}
        </p>
      ) : null}
    </div>
  );
}
