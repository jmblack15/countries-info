'use client'

import { CardCountry } from "./CardCountry"
import { useState } from "react"
import styles from './cardWrapper.module.css'
import Image from "next/image"

const CardWrapper = ({ countries }) => {

  const [searchCountry, setSearchCountry] = useState('')
  const [filterRegion, setFilterRegion] = useState('')
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

  listSearchedCountry = listSearchedCountry.filter(country => country.region === filterRegion || filterRegion === '')

  return (
    <section className={styles.container}>

      <div className={styles.search_container}>
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

        <select
          onChange={(e) => setFilterRegion(e.target.value)}
        >
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className={styles.card_wrapper}>
        {listSearchedCountry.map(contry => (
          <CardCountry
            key={contry.name.common}
            info={contry}
          />
        ))}
      </div>
    </section>
  )
}

export { CardWrapper }