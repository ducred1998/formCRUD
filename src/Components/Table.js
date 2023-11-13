import React from "react";
const Table = (props) => {
  const data = props.list;
  const handleDelete = (index) => {
    // CHỈ SỬ DỤNG KHI CÓ INDEX
    // const temp = data.filter((user) => user !== index);
    const newData = [...data];
    newData.splice(index, 1);
    props.onReList(newData);
  };
  const handleEditor = (index) => {
    props.onEditor(data[index], index);
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="col-1">Id</th>
          <th className="col-3">Name</th>
          <th className="col-6">Address</th>
          <th className="col-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => handleEditor(index)}>
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
              </button>
              <button onClick={() => handleDelete(index)}>
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
