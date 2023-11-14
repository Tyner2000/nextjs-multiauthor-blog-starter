import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/landing_page.module.css'

import { getAllSeries, getAllPosts } from '../../lib/api'

export default function Series({ series }) {
  return (
    <div className="series">
      <div className={styles.landing_container}>
        <div className={styles.landing_title}>
          <h1>Series</h1>
          <p>This section is dedicated to serialized content.</p>
        </div>
        <div className={styles.series_container}>
          {series.map(series => (
            <div className={styles.section_card} key={series.slug}>
              <h2>
                <Link href={series.permalink}>
                  {series.name}
                </Link>
              </h2>

              <p>{series.posts.length} post(s)</p>

              <Link href={series.permalink}>
                Go to Collection →
              </Link>
            </div>
          ))}
        </div>
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
