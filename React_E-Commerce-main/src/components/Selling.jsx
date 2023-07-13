import React, { useState } from 'react';

const Selling = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    productName: '',
    maxPrice: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to backend, update state, etc.
    // You can pass the form data to another component using props or state management (e.g., Redux)
    console.log(formData);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Image:
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </label>
        <br />
        <label>
          Product Name:
          <input type="text" name="productName" value={formData.productName} onChange={handleChange} />
        </label>
        <br />
        <label>
          Maximum Price:
          <input type="text" name="maxPrice" value={formData.maxPrice} onChange={handleChange} />
        </label>
        <br />
        <label>
          Starting Date:
          <input type="text" name="startDate" value={formData.startDate} onChange={handleChange} />
        </label>
        <br />
        <label>
          Ending Date:
          <input type="text" name="endDate" value={formData.endDate} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Selling;
