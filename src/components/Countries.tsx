import { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Link,
  useParams,
} from 'react-router-dom'

import Filters from './Filters'

function Countries() {
  const [countries, setCountries] = useState<any[]>([])
  const [filteredCountries, setFilteredCountries] = useState<any[]>(
    []
  )
  const [search, setSearch] = useState<string>('')
  const [region, setRegion] = useState<string>('')

  const url = 'https://restcountries.com/v2/all'
  const { name } = useParams()

  // // with useEffect, we can make a request to the API with await
  // // and then set the state with the data we get back
  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setCountries(data)
      console.log('data çektim')
    }
    getCountries()
  }, [])

  // once we have the data,
  // if there is no search term, and no region selected,
  // we want to display all the countries
  // if there is a search term, we want to filter the countries
  // if there is a region selected, we want to filter the countries
  // if there is a search term and a region selected, we want to filter the countries
  useEffect(() => {
    if (search === '' && region === '') {
      setFilteredCountries(countries)
    } else if (search !== '' && region === '') {
      setFilteredCountries(
        countries.filter((country) =>
          country.name.toLowerCase().includes(search.toLowerCase())
        )
      )
    } else if (search === '' && region !== '') {
      setFilteredCountries(
        countries.filter((country) => country.region === region)
      )
    } else if (search !== '' && region !== '') {
      setFilteredCountries(
        countries
          .filter((country) =>
            country.name.toLowerCase().includes(search.toLowerCase())
          )
          .filter((country) => country.region === region)
      )
    }
  }, [search, region, countries])

  console.log({ countries })
  console.log(search)
  console.log(region)
  console.log({ filteredCountries })

  return (
    <div>
      <Filters
        search={search}
        setSearch={setSearch}
        region={region}
        setRegion={setRegion}
      />
      {filteredCountries.map((country: any) => (
        <div className="countries--card" key={country.name}>
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
