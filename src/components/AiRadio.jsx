import React from 'react'

const AiRadio = ({ label, name, value, checked, onChange }) => (
  <label className={`radio_label ${checked ? 'checked' : ''}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );

export default AiRadio