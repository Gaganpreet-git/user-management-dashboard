import axios from "axios";
import Form from "../Form/Form";
import "./Modal.css";

const Modal = ({ onClose }) => {
  const API_endpoint = " https://jsonplaceholder.typicode.com";

  const addUser = async (userData) => {
    console.log(userData);
    try {
      const res = await axios.post(`${API_endpoint}/users`, userData);
      console.log(res);
      if (res.status === 201) {
        alert("User added successfully");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const inputs = [
    {
      name: "firstname",
      type: "text",
      placeholder: "e.g John",
      label: "Enter Firstname",
      required: true,
    },
    {
      name: "lastname",
      type: "text",
      placeholder: "Lastname",
      label: "Enter Lastname",
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "e.g example@demo.com",
      label: "Enter email address",
      required: true,
    },
    {
      name: "department",
      type: "text",
      placeholder: "e.g IT",
      label: "Enter your department.",
      required: true,
    },
  ];

  return (
    <div className="modal">
      <Form
        inputs={inputs}
        onSubmit={(data) => {
          addUser(data);

          console.log(data);
        }}
      ></Form>
      <div className="close-btn" onClick={onClose}>
        X
      </div>
    </div>
  );
};

export default Modal;
