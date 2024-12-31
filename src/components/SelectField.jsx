import React from "react";

const SelectField = ({ label, value, name, options, onChange, error }) => {
    

  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        aria-label={name}
        aria-invalid={!!error}
        aria-describedby={error ? `${label.toLowerCase()}-error` : null}
      >
        <option value="">Choose one...</option>
        {options.map((option) => (
          <option key={option.label} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SelectField;