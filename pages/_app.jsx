import Link from 'next/link'

import '../styles/globals.css'
import { textFont, titleFont } from "../utils/fonts";

export default function App({ Component, pageProps }) {
  return (
    <>
      <header className={titleFont.className}>
        <nav>
          <ul className="nav_ul">
            <li className="nav_item">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link href="/posts">
                Posts
              </Link>
            </li>
            <li className="nav_item">
              <Link href="/series">
                Series
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <div className="footer_container">
        <footer className={textFont.className}>
          <p>(c) Tyner Roycroft, 2023.</p>
        </footer>
      </div>
    </>
  )
}
