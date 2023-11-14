import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/post.module.css'

import { getAllPosts, getAuthorBySlug } from '../../lib/api'
import { textFont, titleFont } from "../../utils/fonts";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      <h1 className={titleFont.className}>Posts</h1>
      <div className="post_card_container">
        {posts.map(post => {
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
              <div className="post_page_card_profile">
                <img alt={post.author.name} src={post.author.profilePictureUrl} />
                <div className="post_page_card_author">
                  <strong>{post.author.name}</strong>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts().map(post => ({
        ...post,
        author: getAuthorBySlug(post.author),
      })),
    }
  }
}
