import Form from "../Form/Form";
import "./Modal.css";

const Modal = ({ onClose }) => {
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
