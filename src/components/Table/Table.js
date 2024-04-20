import React from "react";
import "./Table.css";

const Table = ({ headings, rows }) => {
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
