import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

export default function Home({ categories }) {
  // categories is array of keys, but we can hardcode display order
  const blocks = [
    { key: 'clothes', title: 'Clothes', subtitle: 'Wear tribal craft', cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkS3QSfKgfTEOzIe-YfR8OMx8DVEHzoaD3_w&s' },
    { key: 'crafts', title: 'Crafts', subtitle: 'Home & decor', cover: 'https://www.bontravelindia.com/wp-content/uploads/2023/04/Assamese-Handicrafts.jpg' },
    { key: 'pottery', title: 'Pottery', subtitle: 'Clay & ceramics', cover: 'https://thumbs.dreamstime.com/z/intricate-traditional-tribal-pottery-natural-light-created-generative-ai-284700842.jpg?w=768' },
    { key: 'jewellery', title: 'Jewellery', subtitle: 'Tribal jewels', cover: 'https://www.indianmirror.com/culture/jewelry/images/tribal-limg.jpg' },
  ];

  return (
    <div className="home-page">
      <div className="welcome-hero">
        <h1>Welcome to Tribal Crafts</h1>
        <p className="lead">Explore handcrafted clothes, pottery, jewelry and more — directly supporting tribal artisans.</p>
      </div>

      <div className="category-grid">
        {blocks.map(b => (
          <Link key={b.key} to={`/category/${b.key}`} className="category-card">
            <img src={b.cover} alt={b.title} />
            <div className="card-overlay">
              <h3>{b.title}</h3>
              <p>{b.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
