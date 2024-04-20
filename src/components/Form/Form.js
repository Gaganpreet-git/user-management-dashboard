import React, { useState } from "react";
import Button from "../Button/Button";
import "./Form.css";

const Form = ({ inputs, onSubmit }) => {
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form className="form">
      {inputs.map((input, i) => {
        return (
          <>
            <label>{input.label}:</label>
            <br />
            <input
              name={input.name}
              type={input.type || "text"}
              placeholder={input.placeholder || ""}
              onChange={handleChange}
              required={input.required}
              //   value={formData.value ? formData.value : input.value}
            />
          </>
        );
      })}
      <Button
        onClick={(e) => {
          e.preventDefault();
          onSubmit(formData);
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
