import { useEffect, useState } from "react";

export default function Form(props) {
  const [formValue, setFormValue] = useState(
    props.editUser ?? { username: "", age: "", address: "", phone: "" }
  );

  useEffect(() => {
    setFormValue(
      props.editUser ?? { username: "", age: "", address: "", phone: "" }
    );
  }, [props.editUser]);

  const [error, setError] = useState({
    username: "",
    age: "",
    address: "",
    phone: "",
  });
  const handleValueChanged = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formError = {};
    if (!formValue.username) {
      //Error
      formError.username = "Name required";
    }
    if (!formValue.age) {
      //Error
      formError.age = "Age required";
    }
    if (!formValue.address) {
      //Error
      formError.address = "Address required";
    }
    if (!formValue.phone) {
      //Error
      formError.phone = "Phone required";
    }
    setError(formError);

    if (!Object.keys(formError).length) {
      handleClearValues();
      const newUser = {
        name: formValue.username,
        age: formValue.age,
        address: formValue.address,
        phone: formValue.phone,
      };
      props.dataUser(newUser);
      console.log("form submit");
    }
  };
  const handleClearValues = () => {
    setError({
      username: "",
      age: "",
      address: "",
      phone: "",
    });
    setFormValue({
      username: "",
      age: "",
      address: "",
      phone: "",
    });
  };
  console.log(formValue);

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleFormSubmit} onReset={handleClearValues}>
          <div className="form-group">
            <label>Name: </label>
            <input
              className={"form-control" + (error.username ? " is-invalid" : "")}
              type="text"
              name="username"
              value={formValue.name}
              onChange={handleValueChanged}
            />
            <div className="invalid-feedback">{error.username}</div>
          </div>
          <div className="form-group">
            <label>Age: </label>
            <input
              className={"form-control" + (error.age ? " is-invalid" : "")}
              type="number"
              name="age"
              value={formValue.age}
              onChange={handleValueChanged}
            />
            <div className="invalid-feedback">{error.age}</div>
          </div>
          <div className="form-group">
            <label>Address: </label>
            <input
              className={"form-control" + (error.address ? " is-invalid" : "")}
              type="text"
              name="address"
              value={formValue.address}
              onChange={handleValueChanged}
            />
            <div className="invalid-feedback">{error.address}</div>
          </div>
          <div className="form-group">
            <label>Phone: </label>
            <input
              className={"form-control" + (error.phone ? " is-invalid" : "")}
              type="number"
              name="phone"
              value={formValue.phone}
              onChange={handleValueChanged}
            />
            <div className="invalid-feedback">{error.phone}</div>
          </div>

          {/* BUTTON */}
          <div className="d-flex" style={{ gap: "10px" }}>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="reset" className="btn btn-danger">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
