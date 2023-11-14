import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/landing_page.module.css'

import { getAllSeries, getAllPosts } from '../../lib/api'
import { textFont, titleFont } from "../../utils/fonts";

export default function Series({ series }) {
  return (
    <div className="series">
      <h1 className={titleFont.className}>Series</h1>
      <div className={styles.series_container}>
        {series.map(series => (
          <div className={styles.section_card} key={series.slug}>
            <h2 className={titleFont.className}>
              <Link href={series.permalink}>
                {series.name}
              </Link>
            </h2>
            <p className={textFont.className}>{series.posts.length} work(s) in this collection.</p>
            <Link className={textFont.className} href={series.permalink}>
              Go to Collection →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export function getStaticProps() {
  return {
    props: {
      series: getAllSeries().map(series => ({
        ...series,
        posts: getAllPosts().filter(post => post.series === series.slug),
      })),
    }
  }
}
