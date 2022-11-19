import { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Link,
  useParams,
} from 'react-router-dom'

import Country from './Country'

function Countries() {
  const [countries, setCountries] = useState<[]>([])
  const url = 'https://restcountries.com/v2/all'
  const { name } = useParams()

  // with useEffect, we can make a request to the API with await
  // and then set the state with the data we get back
  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setCountries(data)
    }
    getCountries()
  }, [])

  function handleMoreInfo(country: any) {
    console.log(country)
  }

  console.log({ countries })
  return (
    <div>
      {countries.map((country: any) => (
        <div
          className="countries--card"
          key={country.name}
          onClick={() => handleMoreInfo(country.name)}
        >
          <Link to={`/${country.name}`}>
            <img
              className="countries--card--flag"
              src={country.flag}
              alt={country.name}
            />
            <h3>{country.name}</h3>
            <p>
              Population: <span>{country.population}</span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Capital: <span>{country.capital}</span>
            </p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Countries
