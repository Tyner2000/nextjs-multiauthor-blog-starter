import Image from 'next/image'
import Link from 'next/link'

import { getAllSeries, getAllPosts } from '../../lib/api'

export default function Series({ series }) {
  return (
    <div className="series">
      <h1>Series</h1>

      {series.map(series => (
        <div key={series.slug}>
          <h2>
            <Link href={series.permalink}>
              {series.name}
            </Link>
          </h2>

          <p>{series.posts.length} post(s)</p>

          <Link href={series.permalink}>
            Go to profile →
          </Link>
        </div>
      ))}
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
