'use client'

import { BlogItem, Container } from './styles';
import Moment from 'react-moment';
import { BlogPost } from '../../types';
import Link from 'next/link';
import Image from 'next/image';


const index = ({posts}:{posts:BlogPost[]}) => {
  return (
    <Container>
    {posts.map(
      ({
        title,
        author,
        description,
        publishedAt,
        categories,
        mainImage,
        slug,
      }) => (
        <BlogItem key={title}>
            <Link className='image-link' href={`/blog/${slug.current}`}><Image width={'10000'}  height={'10000'} src={mainImage.asset.url} alt="Blog Image" /></Link>
          <div>
            <Link href={`/blog/${slug.current}`}>{title}</Link>
            <p>{description}</p>
            <div>
              <span>
                <i className="bi bi-person"></i>
                {author.name}
              </span>
              <span>
                <i className="bi bi-calendar"></i>{' '}
                <Moment format="MMMM Do YYYY">{new Date(publishedAt)}</Moment>
              </span>
              <span>
                <i className="bi bi-tags"></i>
                {categories[0].title}
              </span>
            </div>
          </div>
        </BlogItem>
      )
    )}
  </Container>
  )
}

export default index