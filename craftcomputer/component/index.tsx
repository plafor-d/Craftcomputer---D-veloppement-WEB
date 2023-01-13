import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getCookie } from 'typescript-cookie'
import styles from '../styles/Home.module.css'

function HeadSite(props: any) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name={props.metaname} content={props.content} />
      <link rel={props.icon} href={props.iconhref} />
    </Head>
  )
}

function HeaderSite(props: any) {
  const [account, setAccount] = useState(<></>)
  useEffect(() => {
    if (getCookie('Authorization') !== undefined) {
      setAccount(
        <Link className={styles.right} href="/account">
          <img id={styles.icon} src="/account.png" alt="account" />
        </Link>
      )
    } else {
      setAccount(
        <Link className={styles.right} href="/account/login">
          <img id={styles.icon} src="/account.png" alt="login" />
        </Link>
      )
    }
  }, [])
  return (
    <header className={styles.header}>
      <Link href="/">
        <img id={styles.logo} src="/logo.png" alt="Logo" />
      </Link>
      {account}
    </header>
  )
}

function Navbar(props: any) {
  return (
    <div className={styles.nav}>
      <Link href="/product/motherboard">Carte mère</Link>
      <Link href="/product/graphiccard">Carte graphique</Link>
      <Link href="/product/cpu">Processeur</Link>
      <Link href="/product/harddisk">Disque dur</Link>
      <Link href="/product/powersupply">Alimentation</Link>
      <Link href="/product/ram">Ram</Link>
      <Link href="/product/fan">Ventilateur</Link>
      <Link href="/product/case">Boitier</Link>
      <Link className={styles.right} href="/basket">
        Panier
      </Link>
    </div>
  )
}

function FooterSite(props: any) {
  return (
    <footer className={styles.footer}>
      <p>
        Communiquer avec le support sur :&nbsp;
        <a href="mailto:craftcomputer.assistance@gmail.com">craftcomputer.assistance@gmail.com</a>
      </p>
      <p>&copy; 2022 Boulard Thomas et Pla Fortea Diego. All right Reserved</p>
    </footer>
  )
}

export { HeadSite, HeaderSite, FooterSite, Navbar }
