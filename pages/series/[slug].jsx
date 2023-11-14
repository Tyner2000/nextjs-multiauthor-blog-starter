import Image from 'next/image'
import Link from 'next/link'

import { getAllSeries, getAllPosts, getSeriesBySlug } from '../../lib/api'

export default function Series({ series }) {
  return (
    <div className="series">
      <h1>{series.name}</h1>
      <ol>
        {series.posts.map(post => (
          <li key={post.slug}>
            <Link href={post.permalink}>
              {post.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function getStaticProps({ params }) {
  const series = getSeriesBySlug(params.slug)

  return {
    props: {
      series: {
        ...series,
        posts: getAllPosts().filter(post => post.series === series.slug),
      },
    },
  }
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllSeries().map(series => ({
      params: {
        slug: series.slug,
      }
    }))
  }
}
