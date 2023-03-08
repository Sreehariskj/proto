import React from "react";

const InputField = ({ label, type = "text", placeholder, value, ...props }) => {
  return (
    <div className="input-field">
      <label className="if-label">{`${label} :`}</label>
      <input
        className="if-input"
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default InputField;
