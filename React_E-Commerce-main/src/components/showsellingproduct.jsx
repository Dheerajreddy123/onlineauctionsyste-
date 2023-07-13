import React from 'react';

const ShowSellingProduct = ({ formData }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Maximum Price</th>
            <th>Starting Date</th>
            <th>Ending Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formData.image}</td>
            <td>{formData.productName}</td>
            <td>{formData.maxPrice}</td>
            <td>{formData.startDate}</td>
            <td>{formData.endDate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShowSellingProduct;
