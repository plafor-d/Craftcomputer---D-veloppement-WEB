import { HeadSite, HeaderSite, FooterSite, Navbar } from '../component/index'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react'
import Link from 'next/link'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

function AccueilCarousel() {
  return (
    <div className={styles.image_carousel}>
      <h1>Welcome to Craftcomputer</h1>
      <Carousel>
        <Link href="/product/motherboard">
          <img className="image_carousel" src="/product/produit_0.png" alt="" />
          <p className="legend">Carte mère</p>
        </Link>
        <Link href="/product/graphiccard">
          <img className="image_carousel" src="/product/produit_5.png" alt="" />
          <p className="legend">Carte graphique</p>
        </Link>
        <Link href="/product/cpu">
          <img className="image_carousel" src="/product/produit_10.png" alt="" />
          <p className="legend">Processeur</p>
        </Link>
        <Link href="/product/harddisk">
          <img className="image_carousel" src="/product/produit_15.png" alt="" />
          <p className="legend">Disque Dur</p>
        </Link>
        <Link href="/product/powersupply">
          <img className="image_carousel" src="/product/produit_20.png" alt="" />
          <p className="legend">Alimentation</p>
        </Link>
        <Link href="/product/ram">
          <img className="image_carousel" src="/product/produit_25.png" alt="" />
          <p className="legend">Ram</p>
        </Link>
        <Link href="/product/fan">
          <img className="image_carousel" src="/product/produit_30.png" alt="" />
          <p className="legend">Ventilateur</p>
        </Link>
        <Link href="/product/case">
          <img className="image_carousel" src="/product/produit_35.png" alt="" />
          <p className="legend">Boitier</p>
        </Link>
      </Carousel>
    </div>
  )
}
export default function Home() {
  return (
    <div className="home">
      <HeadSite title="Home" metaname="home" content="home" icon="icon" iconhref="/favicon.ico" />
      <HeaderSite /> <Navbar />
      <div className={styles.box}>
        <AccueilCarousel />
      </div>
      <FooterSite />
    </div>
  )
}
