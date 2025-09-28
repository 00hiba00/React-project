import React from "react";
import "./Main.css"; // We'll add styles here

function Main() {
  const specials = [
    {
      title: "Greek Salad",
      price: "$12",
      description: "Fresh cucumbers, tomatoes, olives, feta cheese, and olive oil.",
      image: "lemonlogo.png",
    },
    {
      title: "Bruschetta",
      price: "$10",
      description: "Grilled bread rubbed with garlic, topped with tomatoes and basil.",
      image: "lemonlogo.png",
    },
    {
      title: "Lemon Dessert",
      price: "$8",
      description: "Tangy lemon mousse with a buttery cookie base and whipped cream.",
      image: "lemonlogo.png",
    },
  ];

  return (
    <main className="specials-container">
      <div className="specials-header">
        <h2>This Week's Specials</h2>
        <button className="yellow-btn">Online Menu</button>
      </div>

      <div className="cards">
        {specials.map((item) => (
          <div className="card" key={item.title}>
            <img src={item.image} alt={item.title} className="card-image" />
            <div className="card-content">
              <div className="card-title-price">
                <h3 className="card-title">{item.title}</h3>
                <span className="card-price">{item.price}</span>
              </div>
              <p className="card-description">{item.description}</p>
              <p className="order-delivery">Order a delivery</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;
