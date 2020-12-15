import React from "react";
// Functional Component
const Card = (props) => {
  const { title, subtitle, desc } = props; // Destructing
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
