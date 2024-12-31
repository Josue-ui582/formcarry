import React, { useState } from "react";
import TextField from "./TextField";
import { Link } from "react-router-dom";

const LoginForm = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
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

        if (!formData.email) {
          errors.email = "Email is required.";
        } else if (!validateEmail(formData.email)) {
          errors.email = "Invalid email format.";
        }
        if (!formData.password) {
          errors.password = "Password is required.";
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
    
    return(
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
                <div className="remember-section">
                    <div className="parent">
                        <div className="checkbox-parent">
                            <input type="checkbox" className="checkbox" />
                        </div>
                        <span class="base__LabelSpan-sc-hruxgg-1 kjHOcA">Remember me</span>
                    </div>
                    <Link>Forgot your password ?</Link>
                </div>
            <button type="submit">Register</button>
            <p className="back-to-login">
            <Link to="/register">I don't have an account</Link>
            </p>
        </form>
    </div>
    )
}

export default LoginForm;