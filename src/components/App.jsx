import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function getInputs(event) {
    //console.log(event.target.lName.name);
    //console.log(event.target.lName.value);
    let { name, value } = event.target;
    //console.log(value);
    setContact(preValues => {
      if (name === "fName") {
        return { fName: value, lName: preValues.lName };
      } else if (name === "lName") {
        return { fName: preValues.fName, lName: value };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={getInputs}
          name="fName"
          //to set initial value contact.fname strictly not require
          value={contact.fName}
          placeholder="First Name"
        />
        <input onChange={getInputs} name="lName" placeholder="Last Name" />
        <input name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
