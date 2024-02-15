import { getCountries } from '@/utils/getCountries';
import { CardWrapper } from '@/Components/CardWrapper';
import styles from '../styles/page.module.css';

export default async function Home() {
  const countries = await getCountries();

  return (
    <main className={styles.main}>
      <CardWrapper countries={countries} />
    </main>
  )
}
