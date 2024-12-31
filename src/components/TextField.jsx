import React from "react";

const TextField = ({ value, type, name, onChange, placeholder, title, error }) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <div className="field">
      <label htmlFor={title}>{title}</label>
      <input
        type={type}
        id={title}
        value={value}
        name={name}
        placeholder={placeholder}
        aria-label={name}
        aria-invalid={!!error}
        aria-describedby={error ? `${title.toLowerCase()}-error` : null}
        onChange={handleChange}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default TextField;