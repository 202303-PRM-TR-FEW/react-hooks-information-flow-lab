import React from 'react'

export default function Filter({ handleCategoryChange }) {
  return (
    <select name="filter" onChange={handleCategoryChange}>
      <option value="All">Filter by category</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Dessert">Dessert</option>
    </select>
  );
}
