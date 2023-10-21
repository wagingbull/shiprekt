import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { Container } from '@mantine/core';

export function Header() {
  const router = useRouter();
  const { address } = useAccount({
    onConnect() {
      router.push(`/inventory/${address}`);
    },
    onDisconnect() {
      router.push(`/`);
    },
  });

  return (
    <header className={styles.headerContainer}>
      <Container size="lg">
        <div className={styles.headerTop}>
          <Link href="/">
            <h1 className={styles.title}>Cryptopunks Viewer Dapp</h1>
          </Link>
          <div className={styles.rightContent}>
            <ConnectButton showBalance={false} />
          </div>
        </div>
      </Container>
      <Container size="lg">
        <div className={styles.headerBottom}>
          <Link href="/inventory/0x000000000000000000000000000000000000dead">
            <p className={styles.link}>Example Inventory</p>
          </Link>
          <Link href="/detail/2317">
            <p className={styles.link}>Example Details</p>
          </Link>
        </div>
      </Container>
    </header>
  );
}
