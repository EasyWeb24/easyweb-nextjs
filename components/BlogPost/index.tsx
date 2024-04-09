'use client'

import {
    BlogPost,
    CategoriesDisplay,
    Container,
    MetaDataWrapper,
    RecentPostsDisplay,
  } from './styles';

  import { PortableText } from '@portabletext/react';
  import Moment from 'react-moment'
  import Image from 'next/image';
  import Link from 'next/link';
import { BlogPost as BlogPostType, Category } from '@/types';
import Head from 'next/head';

const index = ({blogPostData, recentPosts, categories}:{blogPostData: BlogPostType[], recentPosts:BlogPostType[], categories:Category[]}) => {
  return (
    <Container>
      <Head>
<title>
{blogPostData[0].categories[0].title
}</title>
      </Head>
        <div className="blog-post-wrapper">
          <BlogPost>
            {<Image alt={''} width={'30000'} height='30000' src={blogPostData[0].mainImage.asset.url} />}
            <div className="blog-text-content-wrapper">
              <MetaDataWrapper>
                <div className="meta-data-inner-wrapper">
                  <span>
                    <i className="bi bi-person"></i>
                    {blogPostData[0].author.name}
                  </span>
                  <span>
                    <i className="bi bi-calendar"></i>{' '}
                    <Moment format="MMMM DD, YYYY">
                      {new Date(blogPostData[0].publishedAt)}
                    </Moment>
                  </span>
                  <span>
                    <i className="bi bi-tags"></i>{' '}
                    {blogPostData[0].categories[0].title}
                  </span>
                </div>
              </MetaDataWrapper>
              <h3>{blogPostData[0].title}</h3>
              <PortableText value={blogPostData[0].body} />
            </div>
          </BlogPost>
          <div>
            <RecentPostsDisplay>
              <h3 className="heading">
                <span>Recent Posts</span>
              </h3>
              <div className="post-items-wrapper">
                {recentPosts.map(({ title, slug }) => (
                  <Link key={title} href={`/blog/${slug.current}`} className="post-item">
                    {title}
                  </Link>
                ))}
              </div>
            </RecentPostsDisplay>
            <CategoriesDisplay>
              <h3 className="heading">
                <span>Categories</span>
              </h3>
              <div className="categories-wrapper">
                {categories.map(({ category, count, name }) => (
                  <div key={count} className="category-item">
                    {' '}
                    <Link href={`/blog/category/${name}`}>{category}</Link>
                    <span className="count">({count})</span>
                  </div>
                ))}
              </div>
            </CategoriesDisplay>
          </div>
        </div>
      </Container>
  )
}

export default index