import { useState } from "react";
import { countries } from "./countries";

export default function Form1() {
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (event) => {
    console.log(`
        User Name: ${username}
        Phone: ${phone}
        Country: ${country}
        Accepted Terms: ${acceptedTerms}
    `);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>CREATE ACCOUNT</h1>
      <label>USER NAME: </label>
      <input
        name="username"
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <label>PHONE: </label>
      <input
        name="phone"
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <label>COUNTRY: </label>
      <select
        name="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}>
        <option key=""></option>
        {countries.map((country) => (
          <option key={country}>{country}</option>
        ))}
      </select>
      <br />
      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={(e) => setAcceptedTerms(e.target.value)}
        />
        I accept the terms of service
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
