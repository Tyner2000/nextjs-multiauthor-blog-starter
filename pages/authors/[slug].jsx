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
          <p className={textFont.className}>
          <p className={textFont.className}>👋 Hello!</p>
          <p className={textFont.className}>My name is Tyner. I live in North Carolina, US.</p>
          <p className={textFont.className}>This website is a slow-growing collection of written works that I have created since 2020. This blog serves friends and family predominately. I make no attempt to market or publish anything relating to this website anywhere. If you have stumbled across this page: Welcome!</p>
          <p className={textFont.className}>Since you're already here, go ahead and check out some of my short stories!</p>
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
