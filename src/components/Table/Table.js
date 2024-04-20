import React, { useState } from "react";
import "./Table.css";
import axios from "axios";
import Modal from "../Modal/Modal";

const Table = ({ headings, rows }) => {
  const API_endpoint = " https://jsonplaceholder.typicode.com";
  const [modalOpen, setModalOpen] = useState(false);
  const [userData, setUserData] = useState({});

  const openEditModal = (rowData) => {
    setUserData(rowData);
    setModalOpen(true);
  };

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
    <>
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
              <td onClick={() => openEditModal(row)}>Edit</td>
              <td
                onClick={() => {
                  deleteUser(row.id);
                }}
              >
                Delete
              </td>
            </tr>
          );
        })}
      </table>
      {modalOpen && (
        <Modal
          data={userData}
          closeModal={() => {
            setModalOpen(false);
          }}
        ></Modal>
      )}
    </>
  );
};

export default Table;
