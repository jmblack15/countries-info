export default function DetailPage({ params }) {

  const { country } = params

  return (
    <h1>{country} country</h1>
  )
}