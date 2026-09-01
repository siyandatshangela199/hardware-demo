import React, { useState } from 'react';
import './App.css';
import z from './assets/z.avif';
import tile from './assets/tile.avif';
import e from './assets/brick.jpg';
import w from './assets/w.avif';
import t from './assets/t.avif';
import c from './assets/c.avif';
import d from './assets/d.jpg';
import wood from './assets/wood.jpg';
import x from './assets/x.jpg';
import { FaPhone, FaMapMarkerAlt, FaRegClock, FaSearch, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

// Fixed duplicate IDs from 7 to 7, 8, and 9
const HARDWARE_PRODUCTS = [
  { id: 1, name:  "50kg Paper Cement", price: "R150-R170", image: c },
  { id: 2, name: "Bricklaying Trowel With Wooden Handle", price: "R100-R120", image: t },
  { id: 3, name: "Professional Wheelbarrow 100kg Capacity",price: "R1150-R1200", image: w },
  { id: 4, name: "IBR SHEETING - 4.8 METER - L/DUTY", price: "R200-R220", image: z },
  { id: 5, name: "Metal Roof Tile ELITE L167.5cmxW39.5cm Plus", price: "R140-R160", image: tile },
  { id: 6, name: "Brick Blocks 6 Inch", price: "R8-R10", image: e },
  { id: 7, name: "Aluminium Window Size 1200X1200", price: "R1250-R1260", image: d },
  { id: 8, name: "Square Wooden Dowels, Wooden Sticks for Crafts", price: "R570-R580", image: wood },
  { id: 9, name: "10m Heavy Duty Extension Cord_ Black", price: "R130-R140", image: x }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = HARDWARE_PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <div className="app-container">
        <header className="main-header">
          <h1>SUNSAND HARDWARE</h1>
          
          {/* Combined multiple locations cleanly */}
          <p>
            <FaMapMarkerAlt size={20} color="#e74c3c" />
            <span><strong>Locations:</strong> Sterkspruit, Eastern Cape</span>
          </p>
          
          <p>
            <FaRegClock size={20} color="#f39c12" />
            <span><strong>Opening Hours:</strong> Mon–Sat, 8:00–17:00</span>
          </p>
          
          <p>
            <FaPhone size={20} color="#007bff" />
            <span><strong>Contact:</strong> 067 764 7616</span>
          </p>
          
          <p>
            <FaWhatsapp size={20} color="#25D366" />
            <span><strong>WhatsApp:</strong> 062 312 4497</span>
          </p>

          <p>
            <FaEnvelope size={20} color="#e67e22" />
            <span><strong>Email:</strong> info@sunsandhardware.co.za</span>
          </p>
        </header>

        {/* Search Bar Input */}
        <div className="search-container" style={{ margin: '20px auto', display: 'flex', alignItems: 'center', background: '#fff', padding: '10px 15px', width: "400px", borderRadius: '20px', border: '1px solid darkgrey' }}>
          <FaSearch size={18} color="#666" style={{ marginRight: '10px', flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search for tools, cement, bricks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1rem', background: 'transparent' }}
          />
        </div>

        <main className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <div className="card-footer">
                    <span className="price-tag">
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No products match your search keyword.</p>
          )}
        </main>
      </div>
    </div>
  );
}
