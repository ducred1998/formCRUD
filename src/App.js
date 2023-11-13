import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Table from "./Components/Table";
import Data from "./Components/Data";

function App() {
  const [user, setUser] = useState(Data);
  const [show, setShow] = useState(false);
  const [editUser, setEditUser] = useState();
  const setDataUser = (newUser) => {
    const temp = [...user, newUser];
    setShow(false);
    setUser(temp);
  };
  function showForm() {
    setShow(true);
  }
  function reList(_relist) {
    setUser(_relist);
  }
  function getEditItem(item, index) {
    setEditUser(item);
    setShow(true);
  }
  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
      <div
        style={{
          flex: "40%",
          justifyContent: "center",
          alignContent: "center",
        }}>
        <Table list={user} onReList={reList} onEditor={getEditItem} />
        <div className="text-center">
          <button
            className="btn btn-outline-success"
            style={{ width: "150px" }}
            onClick={showForm}>
            CREATE USER
          </button>
        </div>
      </div>
      {show ? <Form dataUser={setDataUser} editUser={editUser} /> : ""}
    </div>
  );
}

export default App;
