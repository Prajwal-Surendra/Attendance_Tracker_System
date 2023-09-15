import React, { useState } from "react";

export default function TableView() {
  const [values, setValues] = useState({
    className_Name: 0,
    section: "",
  });
  const handleSubmit = () => { };
  return (
    <div className="table-responsive">
      <h3>View Attendance</h3>
      <div className="m-2 p-3">
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
          <span>
            <input
              className="form-control mr-sm-2 "
              type="search"
              placeholder="Enter className"
              aria-label="Search"
              style={{ maxWidth: "25%" }}
            />
            <input
              className="form-control mr-sm-2 "
              type="search"
              placeholder="Enter section"
              aria-label="Search"
              style={{ maxWidth: "25%" }}
            />
          </span>
          <button
            className="btn btn-outline-success my-2 my-sm-0 p-2"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">USN</th>
            <th scope="col">className</th>
            <th scope="col">No of days Present</th>
            <th scope="col">No of days Absent</th>
            <th scope="col">Present Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Peri</td>
            <td>116</td>
            <td>6b</td>
            <td>63</td>
            <td>64</td>
            <td>78.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
