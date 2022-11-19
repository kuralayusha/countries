import { url } from 'inspector'
import { useState, useEffect } from 'react'

function Countries() {
  const [countries, setCountries] = useState<[]>([])
  const url = 'https://restcountries.com/v2/all'

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

  console.log({ countries })
  return (
    // we can use the countries state to render the data
    <div>
      {countries.map((country: any) => (
        <div className="country--card" key={country.name}>
          <img
            className="country--card--flag"
            src={country.flag}
            alt={country.name}
          />
          <h2>{country.name}</h2>
          <p>
            Population: <span>{country.population}</span>
          </p>
          <p>
            Region: <span>{country.region}</span>
          </p>
          <p>
            Capital: <span>{country.capital}</span>
          </p>
        </div>
      ))}
    </div>
  )
}

export default Countries
