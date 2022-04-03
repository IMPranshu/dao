import { useWeb3 } from '@3rdweb/hooks';
import Head from 'next/head'
import Image from 'next/image'
import Login from '../componenets/Login';
import styles from '../styles/Home.module.css'

export default function Home() {
  const { address } = useWeb3();
if (!address) {
  return <Login />;
}
return (
  <div className={styles.container}>
    <h2>You are signed in as {address}</h2>
  </div>
);
}
