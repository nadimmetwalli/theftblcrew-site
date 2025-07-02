import React from 'react';
import './StatCard.css';

function StatCard({ iconClass, value, label }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">
        <i className={iconClass}></i>
      </div>
      <div className="stat-info">
  {Array.isArray(value) ? (
    <ul className="stat-list">
      {value.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  ) : (
    <h3>{value}</h3>
  )}
  <p>{label}</p>
</div>
    </div>
  );
}

export default StatCard;
