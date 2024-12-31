import React, { useRef, useState } from "react";
import TextField from "./TextField";
import SelectField from "./SelectField";
import { Link } from "react-router-dom";
import validateEmail from "../utilis/validateEmail";

const Form = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    choice: "",
  });

  const [formErrors, setFormErrors] = useState({});

  /**
   * Updates the form data state for a specific field.
   *
   * @param {string} field - The field to update.
   * @param {string} value - The new value for the field.
   */
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear the error for the field as the user types
    setFormErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  /**
   * Validates the entire form and sets error messages.
   *
   * @returns {boolean} - Whether the form is valid.
   */
  const validateForm = () => {
    const errors = {};

    if (!formData.fullname) {
      errors.fullname = "Full name is required.";
    }
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Invalid email format.";
    }
    if (!formData.password) {
      errors.password = "Password is required.";
    }
    if (!formData.choice) {
      errors.choice = "Please select an option.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  /**
   * Handles form submission by preventing the default form submission behavior,
   * validating the form, and logging the form data if valid.
   *
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data:", formData);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          title="Full name"
          value={formData.fullname}
          placeholder="Full name"
          type="text"
          name="fullname"
          onChange={(value) => handleChange("fullname", value)}
          error={formErrors.fullname}
        />

        <TextField
          title="Email"
          value={formData.email}
          placeholder="Enter your email address"
          type="email"
          name="email"
          onChange={(value) => handleChange("email", value)}
          error={formErrors.email}
        />

        <TextField
          title="Password"
          value={formData.password}
          placeholder="Enter your password"
          type="password"
          name="password"
          onChange={(value) => handleChange("password", value)}
          error={formErrors.password}
        />

        <SelectField
          label="What kind of work do you do"
          value={formData.choice}
          name="choice"
          options={[
            { value: "option1", label: "Software Developer" },
            { value: "option2", label: "Designer" },
            { value: "option3", label: "Product Manager" },
            { value: "option4", label: "Marketing" },
            { value: "option5", label: "Other" },
          ]}
          onChange={(value) => handleChange("choice", value)}
          error={formErrors.choice}
        />

        <button type="submit">Register</button>
        <p className="back-to-login">
          <Link to="login">I have an account</Link>
        </p>
      </form>
    </div>
  );
};

export default Form;