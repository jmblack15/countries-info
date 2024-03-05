const getCountries = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const data = await res.json();
  return data;
}

const getCountry = async (nameCountry) => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${nameCountry}`)
  const data = await res.json()
  return data[0]
}

export { getCountries, getCountry }

