import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <form
      className="flex flex-col border border-slate-700 rounded-lg p-10"
      onSubmit={submitHandler}
    >
      <div className="p-5 m-4">
        <input
          type="text"
          className="outline-offset-8"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          required
        />
      </div>
      {/**<div className="p-5 m-4">
    
        <input
          value={lastName}
          className="outline-offset-8"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
          type="text"
          name="lastName"
          required
        />
      </div>*/}

      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
