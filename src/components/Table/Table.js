import React from "react";
import "./Table.css";
import axios from "axios";

const Table = ({ headings, rows }) => {
  const API_endpoint = " https://jsonplaceholder.typicode.com";

  const deleteUser = async (userId) => {
    try {
      const res = await axios.delete(`${API_endpoint}/users/${userId}`);
      if (res.status === 200) {
        alert("User deleted successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <table className="table">
      <thead>
        {headings.map((heading) => {
          return <th>{heading}</th>;
        })}
      </thead>

      {rows.map((row) => {
        return (
          <tr>
            <td>{row.id}</td>
            <td>{row.firstname}</td>
            <td>{row.lastname}</td>
            <td>{row.email}</td>
            <td>{row.department}</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
