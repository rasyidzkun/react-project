import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className="filter-btn"
            type="button"
            key={index}
            onClick={filterItems.bind(this, category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
