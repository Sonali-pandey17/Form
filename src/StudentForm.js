import { useState } from "react";

function StudentForm() {
  const [inputarr, setInputarr] = useState([]);


  const [InputData, setInputData] = useState({ name: "", email: "", country: "" });


  function getFunc(getEvent) {
    setInputData({
      ...InputData, [getEvent.target.name]: getEvent.target.value
    });
  }

  let { name, email, country } = InputData;


  function setSubmit() {
    setInputarr([...inputarr, { name, email, country }]);
    console.log(inputarr);
    console.log(InputData);
    setInputData({ name: "", email: "", country: "" });
  }

  return (
    <>
      <div className="body">
        <p>WELCOME TO THE PAGE!</p>
        <div id="form">
          <h2>Student Form</h2>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            value={InputData.name}
            placeholder="Enter Name"
            onChange={(e) => getFunc(e)}
          />
          <br />
          <br />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            value={InputData.email}
            placeholder="Enter Email"
            onChange={(e) => getFunc(e)}
          />
          <br />
          <br />
          <label>Country: </label>
          <select name="country" value={InputData.country} onChange={(e) => getFunc(e)}>
            <option>--Select Country--</option>
            <option>India</option>
            <option>America</option>
            <option>Italy</option>
          </select>
          <br />
          <br />
          <button onClick={() => setSubmit()}>Submit</button>
        </div>
        <br />
        <br />
        <br />
        <table>
          <tr>

            <th>Name</th>
            <th>Email</th>
            <th>Country</th>

          </tr>
          {inputarr.map((info, ind) => {
            return (
              <tr key={ind}>
                <td>{info.name}</td>
                <td>{info.email}</td>
                <td>{info.country}</td>
              </tr>
            );
          })}
        </table>
        </div>
        </>
    );
};

export default StudentForm;
