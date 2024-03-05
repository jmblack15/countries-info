import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/country.module.css'
import { getCountry } from "@/utils/getCountries"

export default async function DetailPage({ params }) {

  const { country } = params
  const info = await getCountry(country);

  console.log(info.flags)

  return (
    <section className={styles.section}>
      <Link href='/' className={styles.button_back}>
        <Image src='/left-arrow.svg' alt="back" height={20} width={20} />
        <p>Back</p>
      </Link>

      <Image src={info.flags.svg} alt={info.flags.alt} height={224} width={320} />

      <h2>{info.name.common}</h2>
    </section>
  )
}