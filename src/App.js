import React, { useState } from 'react';
import './App.css'; // Import your CSS file

// Sample product data (replace with your actual data)
const products = [
  {
    "id": 1,
    "title": "3D FUN GUM GUMMY CANDIES 12X12X15GR",
    "image": "/images/1.jpeg",
    "category": "all"
  },
  {
    "id": 2,
    "title": "3D GUMMY DUCKLING 12X12X15GR",
    "image": "",
    "category": "all"
  },
  {
    "id": 3,
    "title": "3D GUMMY ICE CONE 12X12X15GR",
    "image": "",
    "category": "all"
  },
  {
    "id": 4,
    "title": "3D GUMMY ORANGE 12X12X15GR",
    "image": "",
    "category": "all"
  },
  {
    "id": 5,
    "title": "3D GUMMY STRAWBERRY PILLOWS 12X12X15GR",
    "image": "",
    "category": "all"
  },
    {
    "id": 6,
    "title": "3D HAPPY BEAR 12X12X15GR",
    "image": "",
    "category": "all"
  },
  {
    "id": 7,
    "title": "BLEZZ GULAS",
    "image": "",
    "category": "all"
  },
  {
    "id": 8,
    "title": "BLEZZ MANGGA MADU",
    "image": "",
    "category": "all"
  },
  {
    "id": 9,
    "title": "DENEX BISCUIT STICK CHOCOLATE WHIT BOX 33GRX6",
    "image": "",
    "category": "all"
  },
  {
    "id": 10,
    "title": "DENEX BISCUIT STICK STRAWBERRY WHIT BOX 33GRX6",
    "image": "",
    "category": "all"
  },
  {
    "id": 11,
    "title": "DENEX FUNIMAL CHOCOLATE 28GR X 30",
    "image": "",
    "category": "all"
  },
  {
    "id": 12,
    "title": "DENEX FUNIMAL STRAWBERRY 28GR X 30P",
    "image": "",
    "category": "all"
  },
  {
    "id": 13,
    "title": "DENEX FUNIMAL VANILA 28GR X 30P",
    "image": "",
    "category": "all"
  },
  {
    "id": 14,
    "title": "DENEX HANDLE BISCUITS ASSORTED 350GRX6",
    "image": "",
    "category": "all"
  },
  {
    "id": 15,
    "title": "DENEX HANDLE BISCUITS BLACK COKIES 350GRX6",
    "image": "",
    "category": "all"
  },
    {
    "id": 16,
    "title": "DENEX HANDLE BISCUITS BUTTER COKIES 350GRX6",
    "image": "",
    "category": "all"
  },
  {
    "id": 17,
    "title": "DENEX HANDLE BISCUITS CHOCOLATE 350GRX6",
    "image": "",
    "category": "all"
  },
  {
    "id": 18,
    "title": "DENEX HANDLE BISCUITS GOLDEN 350GRX6",
    "image": "",
    "category": "all"
  },
  {
    "id": 19,
    "title": "DENEX HANDLE BISCUITS SANDWICH VANILA 350GRX6",
    "image": "",
    "category": "all"
  },
  {
    "id": 20,
    "title": "DENEX HANDLE BISCUITS STR & CHERRY7 350GRX6",
    "image": "",
    "category": "all"
  },
  {
    "id": 21,
    "title": "DENEX HANDLE WF CREAM ASSORTED 300GRX6",
    "image": "",
    "category": "all"
  },
    {
    "id": 22,
    "title": "DENEX HANDLE WF CREAM CHOCOLATE 300GRX6",
    "image": "",
    "category": "all"
  },
    {
    "id": 23,
    "title": "DENEX HANDLE WF CREAM SAPPUCCINO 300GRX6",
    "image": "",
    "category": "all"
  },
    {
    "id": 24,
    "title": "DENEX HANDLE WF ROLL ASSORTED 300GRX6",
    "image": "",
    "category": "all"
  },
    {
    "id": 25,
    "title": "DENEX HANDLE WF ROLL CAPPUCCINO 300GRX6",
    "image": "",
    "category": "all"
  },
    {
    "id": 26,
    "title": "DENEX HANDLE WF ROLL CHOCOLATE 300GRX6",
    "image": "",
    "category": "all"
  },
    {
    "id": 27,
    "title": "DENEX HANDLE WF STICK BOXES CHOCOLATE 180GRX12",
    "image": "",
    "category": "all"
  },
    {
    "id": 28,
    "title": "DENEX HANDLE WF STICK BOXES TIRAMISU 180GRX12",
    "image": "",
    "category": "all"
  },
    {
    "id": 29,
    "title": "DENEX MILK COCONUT ORANGE 20GR",
    "image": "",
    "category": "all"
  },
    {
    "id": 30,
    "title": "DENEX MINI BLACK CRACKERS 20GRX10X6RTG",
    "image": "",
    "category": "all"
  },
    {
    "id": 31,
    "title": "DENEX MINI CRACKERS 20GRX10X6RTG",
    "image": "",
    "category": "all"
  },
    {
    "id": 32,
    "title": "DENEX POTATO 250 GR X 6",
    "image": "",
    "category": "all"
  },
    {
    "id": 33,
    "title": "DENEX VEGETABLE & CHEESE STICK 50GRX40P",
    "image": "",
    "category": "all"
  },
    {
    "id": 34,
    "title": "DRAGONFLY WHEAT FLOUR 10X1KG",
    "image": "",
    "category": "all"
  },
    {
    "id": 35,
    "title": "DRAGONFLY WHEAT FLOUR 40X500G",
    "image": "",
    "category": "all"
  },
    {
    "id": 36,
    "title": "FILOO BALLS BISCUIT CHOCOBALL",
    "image": "",
    "category": "all"
  },
    {
    "id": 37,
    "title": "FILOO CUBES CHOCOMILK SCH 6X10X1BG",
    "image": "",
    "category": "all"
  },
    {
    "id": 38,
    "title": "FILOO CUBES CHOCOMILK TPL 12*50*3GR",
    "image": "",
    "category": "all"
  },
    {
    "id": 39,
    "title": "FILOO SOES CHOCO CREAM 6RCG*10PCS*25GR",
    "image": "",
    "category": "all"
  }
];

function App() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = products.filter(
    (product) => activeCategory === 'all' || product.category === activeCategory
  );

  return (
    <div className="app">
      <header className="header">
        <h1>Catalogue</h1>
      </header>
      <nav className="category-nav">
        <button
          className={activeCategory === 'all' ? 'active' : ''}
          onClick={() => setActiveCategory('all')}
        >
          All
        </button>
        <button
          className={activeCategory === 'BKP' ? 'active' : ''}
          onClick={() => setActiveCategory('BKP')}
        >
          BKP
        </button>
      </nav>

      <main className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
