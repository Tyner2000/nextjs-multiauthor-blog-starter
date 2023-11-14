import Image from 'next/image'
import Link from 'next/link'

import { getAllAuthors, getAllPosts, getAuthorBySlug } from '../../lib/api'
import { textFont, titleFont } from "../../utils/fonts";

export default function Author({ author }) {
  return (
    <div className="author">
      <div className="author_page_container">
        <div className="author_page_contents">
          <h1 className={titleFont.className}>{author.name}</h1>
          <p className={textFont.className}>This is some text that is going to live inside of this section tag. This content is not meant to mean anything nor is it meant to be permanent, in fact, it is only filler text. This is some text that is going to live inside of this section tag. This content is not meant to mean anything nor is it meant to be permanent, in fact, it is only filler text.</p>
        </div>
      </div>
    </div>
  )
}

export function getStaticProps({ params }) {
  const author = getAuthorBySlug(params.slug)

  return {
    props: {
      author: {
        ...author,
        posts: getAllPosts().filter(post => post.author === author.slug),
      },
    },
  }
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllAuthors().map(author => ({
      params: {
        slug: author.slug,
      }
    }))
  }
}
