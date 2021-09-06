import React from "react";
import { useState } from "react";
import "./Form.css";

export const Form = () => {
  const [data, setData] = useState({
    name: "",
    address: "",
    occupation: "",
    DOB: "",
  });

  const [dataArray, setDataArray] = useState([]);

  const handleSubmit = (e) => {
    const newArray = [...dataArray];

    newArray.push(data);

    setDataArray(newArray);
    setData({
      name: "",
      address: "",
      occupation: "",
      DOB: "",
    });
    e.preventDefault();
  };

  return (
    <>
      <div>
        <div className="styleclass">
          <form onSubmit={handleSubmit}>
            <input
              style={{ marginRight: "15px" }}
              placeholder="Name"
              type="text"
              value={data.name}
              required
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <input
              style={{ marginRight: "15px" }}
              placeholder="Address"
              type="text"
              value={data.address}
              required
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
            <select
              style={{ marginRight: "15px" }}
              placeholder="Occupation"
              value={data.occupation}
              onChange={(e) => setData({ ...data, occupation: e.target.value })}
            >
              <option value="Salaried">Salaried</option>
              <option value="Government">Government</option>
              <option value="Other">Other</option>
            </select>
            <input
              placeholder="DOB"
              style={{ marginRight: "15px" }}
              type="date"
              max="2021-06-09"
              value={data.DOB}
              onChange={(e) => setData({ ...data, DOB: e.target.value })}
            ></input>
            <button style={{ marginRight: "15px" }}>Submit</button>
          </form>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Occupation</th>
              <th>Date of birth</th>
            </tr>
          </thead>
          {dataArray.map((item, i) => {
            return [
              <tbody key={i}>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.occupation}</td>
                  <td>{item.DOB}</td>
                </tr>
              </tbody>,
            ];
          })}
        </table>
      </div>
    </>
  );
};

export default Form;
