import Link from 'next/link'

import '../styles/globals.css'

import { Roboto_Slab } from 'next/font/google'

const roboto = Roboto_Slab({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className={roboto.className}>
        <nav>
          <ul>
            <li className="nav_item">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link href="/series">
                Series
              </Link>
            </li>
            <li className="nav_item">
              <Link href="/posts">
                Posts
              </Link>
            </li>
            <li className="nav_item">
              <Link href="/authors">
                Authors
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
      <div className="footer_container">
        <footer className={roboto.className}>
          <p>(c) Tyner Roycroft, 2023.</p>
        </footer>
      </div>
    </>
  )
}
