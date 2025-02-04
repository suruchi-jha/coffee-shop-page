import React from "react"

const Menu= () => {
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
            <div className="col col-12 col-md-6 move-up">
              <h3 className="menu-list-title">Coffee & Beverages</h3>
              <hr />
              <ul>
                <li>
                  <p className="list-item">Espresso</p>
                  <span className="item-price">$3.50</span>
                </li>
                <li>
                  <p>Americano</p>
                  <span>$4.00</span>
                </li>
                <li>
                  <p>Cappuccino</p>
                  <span>$4.75</span>
                </li>
                <li>
                  <p>Latte</p>
                  <span>$5.25</span>
                </li>
                <li>
                  <p>Iced Coffee</p>
                  <span>$5.50</span>
                </li>
                <li>
                  <p>Cold Brew</p>
                  <span>$5.75</span>
                </li>
              </ul>
            </div>
            <div className="col col-12 col-md-6 move-up">
              <h3 className="menu-list-title">Bakery</h3>
              <hr />
              <ul>
                <li>
                  <p className="list-item">Croissants</p>
                  <span>$4.55</span>
                </li>
                <li>
                  <p>Bagels</p>
                  <span>$4.70</span>
                </li>
                <li>
                  <p>Donuts</p>
                  <span>$5.35</span>
                </li>
                <li>
                  <p>Brownies</p>
                  <span>$3.85</span>
                </li>
                <li>
                  <p>Scones</p>
                  <span>$4.50</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col col-12 col-md-6 move-up">
              <h3 className="menu-list-title">Specialty Items</h3>
              <hr />
              <ul>
                <li>
                  <p className="list-item">Pumpkin Spice Latte</p>
                  <span>$6.00</span>
                </li>
                <li>
                  <p>Chai Latte</p>
                  <span>$5.50</span>
                </li>
                <li>
                  <p>Affogato</p>
                  <span>$6.25</span>
                </li>
                <li>
                  <p>Ice Cream Sandwich</p>
                  <span>$4.50</span>
                </li>
              </ul>
            </div>
            <div className="col col-12 col-md-6 move-up">
              <h3 className="menu-list-title">Vegan Options</h3>
              <hr />
              <ul>
                <li>
                  <p className="list-item">Vegan Brownies</p>
                  <span>$4.00</span>
                </li>
                <li>
                  <p>Vegan Muffins</p>
                  <span>$3.50</span>
                </li>
                <li>
                  <p>Oat Milk Latte</p>
                  <span>$5.50</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu

