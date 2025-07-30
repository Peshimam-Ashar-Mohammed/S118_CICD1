import React from 'react'

const Home = () => {
  // Get the base URL for GitHub Pages
  const baseUrl = import.meta.env.BASE_URL || '/';

  return (
    <div class="grid-layout">

        <div class="product">
            <img src={`${baseUrl}computers.jpeg`} alt="Computer" />
            <h4>Gaming Computer</h4>
            <p>$999.00</p>
            </div>
          <div class="product">
            <img src={`${baseUrl}mobiles.jpeg`} alt="Mobile Phone" />
            <h4>Smartphone</h4>
            <p>$599.00</p>
            </div>
          <div class="product">
            <img src={`${baseUrl}laptops.jpeg`} alt="Laptop" />
            <h4>Premium Laptop</h4>
            <p>$799.00</p>
            </div>
          <div class="product">
            <img src={`${baseUrl}accessories.jpg`} alt="Accessories" />
            <h4>USB Drive</h4>
            <p>$29.00</p>
            </div>
    </div>
  )
}

export default Home