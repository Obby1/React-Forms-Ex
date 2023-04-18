import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

function NewBoxForm({ addBox, ...props }) {
  const INITIAL_STATE = { width: '', height: '', backgroundColor: '' };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData, id: uuid() });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      <label htmlFor="width">Width:</label>
      <input id="width" name="width" value={formData.width} onChange={handleChange} />

      <label htmlFor="height">Height:</label>
      <input id="height" name="height" value={formData.height} onChange={handleChange} />

      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <button>Add Box</button>
    </form>
  );
}

export default NewBoxForm;
