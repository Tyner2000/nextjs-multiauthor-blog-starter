import Image from 'next/image'
import Link from 'next/link'

import { getAllPosts, getAuthorBySlug, getPostBySlug } from '../../lib/api'

export default function Post({ post }) {
  if (post.date === "archive") {
    var dateDisplay = "From Archive."
  } 
  else {
    var dateDisplay = post.date
  } 

  return (
    <div className="post">
      <h1>{post.title}</h1>

      <div>
        <Image alt={post.author.name} src={post.author.profilePictureUrl} height={40} width={40} />

        <div>
          <strong>
            <Link href={post.author.permalink}>
              {post.author.name}
            </Link>
          </strong>

          <p>{dateDisplay}</p>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.body }} />
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
