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

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch(
        `https://restcountries.com/v2/name/${name}`
      )
      const country = await response.json()
      setCountry(country)
    }
    getCountry()
  }, [])

  // if (country[0]) {
  //   country[0].languages.map((language: any) => {
  //     setLanguageArray((languageArray) => [
  //       ...languageArray,
  //       language.name,
  //     ])
  //   })
  // }

  console.log(country[0])
  console.log({ languageArray })
  return (
    <div className="country--page">
      {country.length ? (
        <div className="country--page--main--container">
          <img src="" alt="" />
          <div className="country--page--info">
            <h1>Country name</h1>
            {/* find the native name and print it */}
            <>
              <p>
                Native Name: <span>{country[0].nativeName}</span>
              </p>
              <p>
                Population: <span>{country[0].population}</span>
              </p>
              <p>
                Region: <span>{country[0].region}</span>
              </p>
              <p>
                Sub Region: <span>{country[0].subregion}</span>
              </p>
              <p>
                Capital: <span>{country[0].capital}</span>
              </p>
              <p>
                Top Level Domain:{' '}
                <span>{country[0].topLevelDomain}</span>
              </p>
              <p>
                Independent :{' '}
                <span>{country[0].independent ? 'yes' : 'no'}</span>
              </p>
              <p>
                Timezones: <span>{country[0].timezones}</span>
              </p>
              <p>
                {/* Languages: while looping through the languages array, print
                each language name */}
                Languages:{' '}
                <span>
                  {languageArray.map((language) => (
                    <span>{language}</span>
                  ))}
                </span>
              </p>
              {/* 
              <p>
                Currencies: <span>{country[0].currencies}</span>
              </p>
          */}
            </>
            <>
              <p>
                Border Countries:
                {/*TODO: mapleyerek aç tane varsa span içine yerleştir*/}
              </p>
            </>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  )
}

export default Country
