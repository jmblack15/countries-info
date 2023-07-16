import { getCountries } from '@/utils/getCountries';
import { CardCountry } from '@/Components/CardCountry';
import styles from '../styles/page.module.css';

export default async function Home() {
  const countries = await getCountries();
  return (
    <>
      {countries.map(country => (
        <CardCountry
          key={country.name.common}
          name={country.name.common}
          popularion={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </>
  )
}
