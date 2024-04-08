'use client'


import React from 'react';
import { BlogItem, Container } from './styles';
import Link from 'next/link';
import { BlogPost } from '@/types';
import Image from 'next/image';
import Moment from 'react-moment';




const Index= ({posts}:{posts:BlogPost[]}) => {
  return (
    <Container>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
          <Link href="/">Blog</Link>
          </li>
<li className="breadcrumb-item active" aria-current="page">{posts[0].categories[0].title}
          </li>
        </ol>
      </nav>
  <div className="blog-items">
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
    )}    </div>  
    </Container>
  );
};

export default Index;
