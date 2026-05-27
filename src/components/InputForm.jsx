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
      <div>
        <label htmlFor="name"></label>
        <input className="border mb-3"
          type="text"
          placeholder="Type Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email"></label>
        <input className="border"
          type="email"
          placeholder="Type Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <h3>Your Name: {name}</h3>
      <h3>Email: {email}</h3>

      <button type="submit">Submit</button>
    </form>
  );
}

export default InputForm;
