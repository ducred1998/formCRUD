import { useState } from "react";

export default function Form2() {
  const [values, setValues] = useState({
    inputField: { username: "", phone: "", email: "", address: "" },
    people: [],
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const people = [...values.people, values.inputField];
    //clear all field
    setValues({
      people,
      inputField: {
        username: "",
        phone: "",
        email: "",
        address: "",
      },
    });
  };
  const handleInputChange = (event) => {
    const inputs = values.inputField;
    inputs[event.target.name] = event.target.value;
    setValues({
      ...values,
      inputs,
    });
  };
  return (
    <>
      <h1>CREATE NEW PEOPLE</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Your Name"
          value={values.inputField.username}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="number"
          name="phone"
          placeholder="Your Phone"
          value={values.inputField.phone}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          value={values.inputField.email}
          onChange={handleInputChange}
        />
        <br />
        <input
          type="text"
          name="address"
          placeholder="Your Address"
          value={values.inputField.address}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Add New People</button>
      </form>
      <div>
        <h3>List of Peoples</h3>
        <ul>
          {values.people.map(({ username, phone, address }, index) => (
            <li key={index}>
              {username} - {phone} - {address}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
