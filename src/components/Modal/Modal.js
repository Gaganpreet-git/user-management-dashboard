import axios from "axios";
import Form from "../Form/Form";
import "./Modal.css";

const Modal = ({ onClose, data, closeModal, setUsersData }) => {
  const API_endpoint = " https://jsonplaceholder.typicode.com";

  const addUser = async (userData) => {
    console.log(userData);
    try {
      const res = await axios.post(`${API_endpoint}/users`, userData);
      const user = res.data;
      setUsersData((prevState) => {
        return [...prevState, user];
      });
      console.log(res);
      if (res.status === 201) {
        alert("User added successfully");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const updateUser = async (userData, userId) => {
    console.log(userId, "User updated successfully");
    try {
      const res = await axios.put(`${API_endpoint}/users/${userId}`, userData);
      closeModal();
      if (res.status === 200) {
        alert("User updated successfully");
      }
    } catch (error) {
      console.log(error);
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
      value: data ? data.firstname : "",
    },
    {
      name: "lastname",
      type: "text",
      placeholder: "Lastname",
      label: "Enter Lastname",
      required: true,
      value: data ? data.lastname : "",
    },
    {
      name: "email",
      type: "email",
      placeholder: "e.g example@demo.com",
      label: "Enter email address",
      required: true,
      value: data ? data.email : "",
    },
    {
      name: "department",
      type: "text",
      placeholder: "e.g IT",
      label: "Enter your department.",
      required: true,
      value: data ? data.department : "",
    },
  ];

  const handleSubmit = (formData) => {
    if (data) {
      updateUser(formData, data.id);
    } else {
      addUser(formData);
    }

    console.log(formData);
  };

  return (
    <div className="modal">
      <Form inputs={inputs} onSubmit={handleSubmit}></Form>
      <div className="close-btn" onClick={onClose}>
        X
      </div>
    </div>
  );
};

export default Modal;
