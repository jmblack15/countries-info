import styles from '@/styles/cardCountry.module.css';


const CardCountry = ({
  flag,
  name,
  popularion,
  region,
  capital
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.flag}>
        
      </div>
      <div className={styles.container_info}>
        <h2>{name}</h2>
        <ul>
          <li>
            <p>Population: </p>
            <p>{popularion.toLocaleString('es')}</p>
          </li>
          <li>
            <p>Region: </p>
            <p>{region}</p>
          </li>
          <li>
            <p>Capital: </p>
            <p>{capital}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export { CardCountry }