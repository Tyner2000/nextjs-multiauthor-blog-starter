import Image from 'next/image'
import Link from 'next/link'

import { getAllSeries, getAllPosts, getSeriesBySlug } from '../../lib/api'
import { textFont, titleFont } from "../../utils/fonts";

export default function Series({ series }) {
  return (
    <div className="series">
      <h1 className={titleFont.className}>{series.name}</h1>
      <div className="series_page_list_container">
      {series.posts.map(post => {
        if (post.date === "archive") {
          var dateDisplay = "From the Archive."
        } 
        else {
          var dateDisplay = post.date
        }
        return (
          <article className="post_page_card" key={post.slug}>
            <h2 className="post_page_card_title">
              <Link className={titleFont.className} href={post.permalink}>
                {post.title}
              </Link>
              <p className={textFont.className}>-- {dateDisplay}</p>
            </h2>
            <p className={textFont.className}>"{post.excerpt}"</p>
            <Link className="post_page_card_read_more" href={post.permalink}>
              Read more →
            </Link>
          </article>
        )
      })}
      </div>
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
