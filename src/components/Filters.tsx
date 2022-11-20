import { useState, useEffect } from 'react'

type FilterProps = {
  search: string
  region: string
  setSearch: (search: string) => void
  setRegion: (region: string) => void
}

function Filters(props: FilterProps) {
  // console.log(props.countries)

  return (
    <div className="filters">
      <form className="form">
        <input
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Search Country"
          value={props.search}
          onChange={(e) => props.setSearch(e.target.value)}
        />

        <div className="select">
          <select
            name="select"
            id="select"
            value={props.region}
            onChange={(e) => props.setRegion(e.target.value)}
          >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filters
