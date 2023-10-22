import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { AccountForm } from '../components/AccountForm/AccountForm';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface AccountFormValues {
  address: string;
}
const HomePage: NextPage = () => {
  const router = useRouter();

  const handleSubmit = (values: AccountFormValues) => {
    router.push(`/inventory/${values.address}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>ShipRekt</title>
        <meta content="ShipRekt" name="description" />
        <link href="/favicon.png" rel="icon" />

        <link rel="manifest" href="https://progressier.app/Lm9JXH26aYaOBUG2d2zR/progressier.json"/>
        <script defer src="https://progressier.app/Lm9JXH26aYaOBUG2d2zR/script.js"></script>
      </Head>

      <main className={styles.main}>
        <Link href="/inventory/0x000000000000000000000000000000000000dead">
          <img src="/favicon.jpg" alt="Click for example Cryptopunk" />
        </Link>

     
      </main>

      <footer className={styles.footer}>
        <p>
          Created by{' '}
          <a href="https://linktr.ee/wagingbull" target="_new">
            wagingbull
          </a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
