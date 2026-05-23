import { useState } from "react";

function InputForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <h3>Your Name: {name}</h3>
      <h3>Email: {email}</h3>

      <button type="submit">Submit</button>
    </form>
  );
}

export default InputForm;
