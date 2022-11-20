import { useState, useEffect } from 'react'

function Filters() {
  return (
    <div className="filters">
      <form className="form" id="form">
        <input
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Search Country"
        />

        <div className="select">
          <select name="select" id="select">
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filters
