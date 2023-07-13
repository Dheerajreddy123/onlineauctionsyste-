import React, { useState } from 'react';
import Selling from './Selling';
import ShowSellingProduct from './showsellingproduct';

const Nav = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleSectionClick('sell')}>Sell Products</button>
        <button onClick={() => handleSectionClick('products')}>Products to be Sold</button>
      </div>
      {activeSection === 'sell' && <Selling />}
      {activeSection === 'products' && <ShowSellingProduct />}
    </div>
  );
};

export default Nav;
