import Image from 'next/image'
import Link from 'next/link'

import { getAllPosts, getAuthorBySlug } from '../../lib/api'

export default function Posts({ posts }) {
  return (
    <div className="posts">
      <h1 className="post_header">Posts</h1>

      {posts.map(post => {
        if (post.date === "archive") {
          var dateDisplay = "From Archive."
        } 
        else {
          var dateDisplay = post.date
        } 
        return (
          <article className="post_page_card" key={post.slug}>
            <h2>
              <Link href={post.permalink}>
                {post.title}
              </Link>
            </h2>

            <p>{post.excerpt}</p>

            <div>
              <Image alt={post.author.name} src={post.author.profilePictureUrl} height={40} width={40} />

              <div>
                <strong>{post.author.name}</strong>
                <p>{dateDisplay}</p>
              </div>
            </div>

            <Link href={post.permalink}>
              Read more →
            </Link>
          </article>
        )
      })}
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
