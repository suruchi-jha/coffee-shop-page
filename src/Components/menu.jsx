'use client';

import React from "react";


const menuItems = [
  { id: 1, name: 'Espresso', price: 3.50, category: 'Coffee & Beverages' },
  { id: 2, name: 'Americano', price: 4.00, category: 'Coffee & Beverages' },
  { id: 3, name: 'Cappuccino', price: 4.75, category: 'Coffee & Beverages' },
  { id: 4, name: 'Latte', price: 5.25, category: 'Coffee & Beverages' },
  { id: 5, name: 'Iced Coffee', price: 5.50, category: 'Coffee & Beverages' },
  { id: 6, name: 'Cold Brew', price: 5.75, category: 'Coffee & Beverages' },
  { id: 7, name: 'Croissants', price: 4.55, category: 'Bakery' },
  { id: 8, name: 'Bagels', price: 4.70, category: 'Bakery' },
  { id: 9, name: 'Donuts', price: 5.35, category: 'Bakery' },
  { id: 10, name: 'Brownies', price: 3.85, category: 'Bakery' },
  { id: 11, name: 'Scones', price: 4.50, category: 'Bakery' },
  { id: 12, name: 'Pumpkin Spice Latte', price: 6.00, category: 'Specialty Items' },
  { id: 13, name: 'Chai ', price: 5.50, category: 'Specialty Items' },
  { id: 14, name: 'Affogato', price: 6.25, category: 'Specialty Items' },
  { id: 15, name: 'Ice Cream Sandwich', price: 4.50, category: 'Specialty Items' },
  { id: 16, name: 'Vegan Brownies', price: 4.00, category: 'Vegan Options' },
  { id: 17, name: 'Vegan Muffins', price: 3.50, category: 'Vegan Options' },
  { id: 18, name: 'Oat Milk Latte', price: 5.50, category: 'Vegan Options' },
];

const Menu = () => {
  

  const renderMenuSection = (category) => {
    const items = menuItems.filter(item => item.category === category);
    return (
      <div className="col col-12 col-md-6 move-up">
        <h3 className="menu-list-title">{category}</h3>
        <hr />
        <ul>
          {items.map(item => (
            <li key={item.id} className="menu-item">
            <p className="menu-item-name">{item.name}</p>
            <span className="menu-item-price">${item.price.toFixed(2)}</span>
          </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="container-lg middle-container" id="menu">
      <div className="row">
        <div className="col col-lg-3 col-md-6 col-sm-6 col-6 order-lg-1 order-sm-2 order-2 py-2 px-2 image-col">
          <img src="./assets/coffee-cake.jpg" className="py-2" alt="coffee-img" width="100%" />
          <img src="./assets/coffee-pexels-photo-8.jpeg" className="py-2" alt="coffee-img" width="100%" />
        </div>
        <div className="col col-lg-3 py-2 px-2 col-md-6 col-sm-6 col-6 order-lg-2 order-sm-3 order-2 image-col">
          <img src="./assets/1425485.webp" className="py-2" alt="coffee-img" width="100%" />
          <img src="./assets/croissant.jpg" className="py-2" alt="coffee-img" width="100%" />
        </div>
        <div className="col col-lg-6 px-5 col-sm-12 col-md-12">
          <p className="cursive-font-big">Our</p>
          <p className="cite-font-lg move-up-up">MENU</p>
          <div className="row">
            {renderMenuSection('Coffee & Beverages')}
            {renderMenuSection('Bakery')}
          </div>
          <div className="row mt-4">
            {renderMenuSection('Specialty Items')}
            {renderMenuSection('Vegan Options')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;