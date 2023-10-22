import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';


const HomePage: NextPage = () => {
  const [goldCount, setGoldCount] = useState(0);
  const [minerCount, setMinerCount] = useState(0);
  const [winMessage, setWinMessage] = useState('');
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [recordTime, setRecordTime] = useState(0);

  useEffect(() => {
    let savedGoldCount, savedMinerCount, savedRecordTime;
    if (typeof window !== 'undefined') {
      savedGoldCount = localStorage.getItem('goldCount');
      savedMinerCount = localStorage.getItem('minerCount');
      savedRecordTime = localStorage.getItem('recordTime');
    }
    setGoldCount(savedGoldCount ? parseInt(savedGoldCount) : 0);
    setMinerCount(savedMinerCount ? parseInt(savedMinerCount) : 0);
    setRecordTime(savedRecordTime ? parseInt(savedRecordTime) : 0);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('goldCount', goldCount.toString());
      localStorage.setItem('minerCount', minerCount.toString());
    }
    if (minerCount >= 10) {
      setWinMessage('You win!');
      setEndTime(Date.now());
      const elapsedTime = endTime - startTime;
      if (elapsedTime < recordTime || recordTime === 0) {
        setRecordTime(elapsedTime);
        localStorage.setItem('recordTime', elapsedTime.toString());
      }
      setGoldCount(0);
      setMinerCount(0);
    }
  }, [goldCount, minerCount]);

  const increaseGold = () => {
    if (startTime === 0) {
      setStartTime(Date.now());
    }
    setGoldCount(goldCount + 1 + minerCount);
  };

  const hireMiner = () => {
    if (goldCount >= 10) {
      setGoldCount(goldCount - 10);
      setMinerCount(minerCount + 1);
    }
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
        <h1>Gold: {goldCount}</h1>
        <h1>Miners: {minerCount}</h1>
        {winMessage && <h2>{winMessage}</h2>}
        {recordTime > 0 && <h2>Record Time: {recordTime}ms</h2>}

        <button onClick={increaseGold}>
          Click to increase gold count by {1 + minerCount}
        </button>

        <button onClick={hireMiner} disabled={goldCount < 10}>
          Hire a miner for 10 gold
        </button>
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


