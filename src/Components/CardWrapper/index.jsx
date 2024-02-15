'use client'

import { CardCountry } from "./CardCountry"
import { useState } from "react"
import styles from './cardWrapper.module.css'
import Image from "next/image"

const CardWrapper = ({ countries }) => {

  const [searchCountry, setSearchCountry] = useState('')
  let listSearchedCountry = []

  if (searchCountry.length > 0) {
    listSearchedCountry = countries.filter(country => {
      const countryName = country.name.common.toLowerCase()
      const searchedCountryName = searchCountry.toLowerCase()
      return countryName.includes(searchedCountryName)
    })
  } else {
    listSearchedCountry = countries
  }

  return (
    <section className={styles.container}>

      <div>
        <div className={styles.search}>
          <Image
            src='/search.png'
            alt="search icon"
            width={24}
            height={24}
          />
          <input
            className={styles.searchContry}
            type="text"
            placeholder="Search for a country..."
            value={searchCountry}
            onChange={(e) => setSearchCountry(e.target.value)}
          />
        </div>
      </div>

      {listSearchedCountry.map(contry => (
        <CardCountry
          key={contry.name.common}
          info={contry}
        />
      ))}
    </section>
  )
}

export { CardWrapper }