import { useState } from "react";

function InputForm() {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Your Name: {name}</h2>
    </div>
  );
}

export default InputForm;
