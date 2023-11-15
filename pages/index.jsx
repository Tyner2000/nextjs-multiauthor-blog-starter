import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { textFont, titleFont } from "./../utils/fonts";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Works Collected.</title>
        <meta name="description" content="Tyner Roycroft's Writing." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="index_container">
        <div className="index_title">
          <h1 className={titleFont.className}>Works Collected.</h1>
        </div>
        <div className="root_index_description">
          <p>👋 Hello!</p>
          <p>My name is Tyner. I live in North Carolina, US.</p>
          <p>This website is a slow-growing collection of written works that I have created since 2020. This blog serves friends and family predominately. I make no attempt to market or publish anything relating to this website anywhere. If you have stumbled across this page: Welcome!</p>
          <p>Since you're already here, go ahead and check out some of my poetry and short stories! If any of you are curious about the development of this blog, you can follow its progress on my Github profile, which is linked in the sidebar of this page.</p>
        </div>
      </div>
    </div>
  )
}