import styles from './cardCountry.module.css';
import Link from 'next/link';
import Image from 'next/image';

const CardCountry = ({ info }) => {

  return (
    <Link href={info.name.common} className={styles.card}>
      <Image src={info.flags.svg} alt={info.flags.alt ? info.flags.alt : 'flag'} width={320} height={180} />
      <div className={styles.container_info}>
        <h2>{info.name.common}</h2>
        <ul>
          <li>
            <p>Population: </p>
            <p>{info.population}</p>
          </li>
          <li>
            <p>Region: </p>
            <p>{info.region}</p>
          </li>
          <li>
            <p>Capital: </p>
            <p>{info.capital}</p>
          </li>
        </ul>
      </div>
    </Link>
  )
}

export { CardCountry }