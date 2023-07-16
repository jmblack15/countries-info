export default function DetailPage({ params }) {

  const { name } = params

  return (
    <h1>{name} country</h1>
  )
}