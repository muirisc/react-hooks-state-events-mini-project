import React from "react";
import { CATEGORIES } from "../data";
import App from "./App";

function CategoryFilter({categories, categoryChange, selectedCategory }) {
  return (  
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map( (category) => {
        return <button key={category} value={category} className={category == selectedCategory ? "selected" : null} onClick={categoryChange}> {category} </button>})}
    </div>
  );
}

export default CategoryFilter;
