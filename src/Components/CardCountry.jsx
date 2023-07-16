const CardCountry = ({
  flag,
  name,
  popularion,
  region,
  capital
}) => {
  return (
    <div>
      <div>

      </div>
      <h2>{name}</h2>
      <ul>
        <li>
          <p>Population: </p>
          <p>{popularion}</p>
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
  )
}

export { CardCountry }