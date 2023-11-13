import { useState, useEffect } from "react";

export default function Form3() {
  const initialValues = { username: "", phone: "", email: "", message: "" };
  const [values, setValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <div className="form-group">
      <label>Your Name</label>
      <input
        className="form-control"
        id="name"
        type="text"
        placeholder="Your Name"
        name="username"
        value={values.username}
      />
      <p className="text-danger">{formErrors.username}</p>
    </div>
  );
}
