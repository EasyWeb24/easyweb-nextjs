
import React from 'react';
import sanityClient from '../../../../client';
import LayoutWrapper from '@/components/LayoutWrapper';
import { BlogPost } from '@/types';
import CategoryComponent from '../../../../components/CategoryComponent'

 async function fetchPostsByCategory(categoryName:string) {
  const query = `*[_type == "post" && category[].name == ${categoryName}] | order(publishedAt desc) {
    mainImage {asset -> {url}}, title, description,author->, publishedAt, slug, categories[]->
  }`;


  try {
    const posts = await sanityClient.fetch(query);
    return posts as BlogPost[]
  } catch (error) {
    console.error('Error fetching posts:', (error as Error).message);
    return []
  }
}
const Index= async({params}:{params:{slug:string}}) => {
  const posts = await fetchPostsByCategory(params.slug)
  return (
    <LayoutWrapper>
{   posts.length !== 0 && <CategoryComponent posts={posts}/>
}    
</LayoutWrapper>
  );
};

export default Index;
