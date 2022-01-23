import React from 'react';

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
        <h2>{label} </h2>
      <select value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option value={option.value} key={index}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown