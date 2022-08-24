import React from "react";
import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(email, password);
    <h1>ho</h1>;
  };

  return (
    <form className="inline-flex flex-col" onSubmit={(e) => e.preventDefault()}>
      <label>
        <input
          className="border text-center border-slate-700"
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="my-5">
        <input
          placeholder="Password"
          className="border text-center border-slate-700"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button
        className="border border-gray-800  rounded-full"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
