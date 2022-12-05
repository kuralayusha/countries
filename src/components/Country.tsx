import { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Link,
  useParams,
} from 'react-router-dom'

function Country() {
  const [country, setCountry] = useState<any[]>([])
  const { name } = useParams()
  const [languageArray, setLanguageArray] = useState<any[]>([])
  const [borderCountries, setBorderCountries] = useState<any[]>([])
  const [borderCountriesName, setBorderCountriesName] = useState<
    any[]
  >([])

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `https://restcountries.com/v2/name/${name}`
      )
      const country = await response.json()
      setCountry(country)
    }
    getCountry()
  }, [name])

  // to get the languages, we need to map over the array
  useEffect(() => {
    if (country[0] && country[0].languages) {
      country[0].languages.map((language: any) => {
        setLanguageArray((languageArray) => [
          ...languageArray,
          language.name,
        ])
      })
    }

    if (country[0] && country[0].borders) {
      country[0].borders.map((border: any) => {
        setBorderCountries((borderCountries) => [
          ...borderCountries,
          border,
        ])
      })
    }
  }, [country])

  // for each border country,
  // we need to make a request to the
  // API to get the name of the country and
  // then display it on the page
  useEffect(() => {
    if (borderCountries.length > 0 && country[0] !== undefined) {
      borderCountries.map((border) => {
        const getBorderCountry = async () => {
          const response = await fetch(
            `https://restcountries.com/v2/alpha/${border}`
          )
          const borderCountry = await response.json()
          setBorderCountriesName((borderCountriesName) => [
            ...borderCountriesName,
            borderCountry.name,
          ])
        }
        getBorderCountry()
      })
    }
  }, [borderCountries])

  console.log(country[0])
  console.log({ languageArray })
  console.log({ borderCountries })
  console.log({ borderCountriesName })

  return (
    <div className="country--page">
      <p className="back">
        <Link
          to={`/`}
          style={{ textDecoration: 'none' }}
          className="back--link"
        >
          Back
        </Link>
      </p>

      {country.length ? (
        <div className="country--page--main--container">
          <img src={country[0].flag} alt={country[0].alpha2Code} />
          <div className="country--page--info">
            <div className="info--part one">
              <h1>{country[0].name}</h1>
            </div>
            <div className="info--part--group">
              <div className="info--part two">
                <p>
                  Native Name:{' '}
                  {country[0].nativeName ? (
                    <span>{country[0].nativeName}</span>
                  ) : (
                    <span>N/A</span>
                  )}
                </p>
                <p>
                  Population:{' '}
                  {country[0].population ? (
                    <span>{country[0].population}</span>
                  ) : (
                    <span>N/A</span>
                  )}
                </p>
                <p>
                  Region:{' '}
                  {country[0].region ? (
                    <span>{country[0].region}</span>
                  ) : (
                    <span>N/A</span>
                  )}
                </p>
                <p>
                  Sub Region:{' '}
                  {country[0].subregion ? (
                    <span>{country[0].subregion}</span>
                  ) : (
                    <span>N/A</span>
                  )}
                </p>
                <p>
                  Capital:{' '}
                  {country[0].capital ? (
                    <span>{country[0].capital}</span>
                  ) : (
                    <span>N/A</span>
                  )}
                </p>
              </div>
              <div className="info--part three">
                <p>
                  Top Level Domain:{' '}
                  {country[0].topLevelDomain ? (
                    <span>{country[0].topLevelDomain}</span>
                  ) : (
                    <span>N/A</span>
                  )}
                </p>
                <p>
                  Independent :{' '}
                  {country[0].independent ? (
                    <span>
                      {country[0].independent ? 'Yes' : 'No'}
                    </span>
                  ) : (
                    <span>N/A</span>
                  )}
                </p>
                <p>
                  Timezones:{' '}
                  {country[0].timezones ? (
                    <span>{country[0].timezones[0]}</span>
                  ) : (
                    <span>N/A</span>
                  )}
                </p>
                <p>
                  Languages:
                  {languageArray.length > 0 ? (
                    languageArray.map((language) => (
                      <span> {language} </span>
                    ))
                  ) : (
                    <span>N/A</span>
                  )}
                </p>
                <p>
                  Currencies:{' '}
                  {country[0].currencies ? (
                    <span>{country[0].currencies[0].name}</span>
                  ) : (
                    <span>N/A</span>
                  )}
                </p>
              </div>
            </div>
            <div className="info--part four">
              <h3>Border Countries:</h3>
              <div className="info--part four group">
                {/*TODO: print all borderCountriesName*/}
                {borderCountriesName.length > 0 ? (
                  borderCountriesName.map((borderCountry) => (
                    // TODO: make the border countries clickable and link to their respective pages
                    <Link
                      to={`/${borderCountry}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <p> {borderCountry} </p>
                    </Link>
                  ))
                ) : (
                  <p>N/A</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  )
}

export default Country
