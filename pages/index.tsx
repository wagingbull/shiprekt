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
        <title>Cryptopunks Viewer Dapp</title>
        <meta content="Cryptopunks Viewer Dapp" name="description" />
        <link href="/favicon.png" rel="icon" />
      </Head>

      <main className={styles.main}>
        <Link href="/inventory/0x000000000000000000000000000000000000dead">
          <img src="/favicon.png" alt="Click for example Cryptopunk" />
        </Link>

        <AccountForm
          title="Connect wallet or enter address to view Cryptopunks inventory"
          onSubmit={handleSubmit}
        />
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
