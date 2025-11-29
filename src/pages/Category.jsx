import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/category.css';

export default function Category({ data }) {
  const { slug } = useParams();
  const cat = data[slug];

  if (!cat) return <div style={{ padding: 24 }}>Category not found</div>;

  return (
    <div className="category-page">
      <div className="category-hero">
        <h1>{cat.title}</h1>
        <p className="muted">{cat.description}</p>
      </div>

      <div className="items-grid">
        {cat.items.map(item => (
          <div className="item-card" key={item.id}>
            <div className="media">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="item-body">
              <h3>{item.title}</h3>
              <p className="muted">{item.description}</p>
              <div className="item-row">
                <div className="price">₹{item.price}</div>
                <button className="btn-buy">View / Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
