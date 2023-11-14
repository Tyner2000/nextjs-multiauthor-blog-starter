import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/post.module.css'
import { textFont, titleFont } from "../../utils/fonts";

import { getAllPosts, getAuthorBySlug, getPostBySlug } from '../../lib/api'

export default function Post({ post }) {
  if (post.date === "archive") {
    var dateDisplay = "From the Archive."
  } 
  else {
    var dateDisplay = post.date
  } 

  return (
    <div className="post">
      <div  className={styles.post_container}>
        <div className={styles.post_title}>
          <h1 className={titleFont.className}>{post.title}</h1>
          <p className={titleFont.className}>{dateDisplay}</p>
        </div>
        <div className={styles.author_mini_card}>
            <div className={styles.author_mini_card_profile}>
              <img alt={post.author.name} src={post.author.profilePictureUrl}/>
            </div>
            <div className={styles.author_mini_card_content}>
              <strong><Link className={textFont.className} href={post.author.permalink}>
                {post.author.name}
              </Link></strong>
            </div>
        </div>
        <div className={styles.post_body}>
          <div className={textFont.className} dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </div>
    </div>
  )
}

export function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  const author = getAuthorBySlug(post.author)

  return {
    props: {
      post: {
        ...post,
        author,
      },
    },
  }
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllPosts().map(post => ({
      params: {
        slug: post.slug,
      },
    })),
  }
}
