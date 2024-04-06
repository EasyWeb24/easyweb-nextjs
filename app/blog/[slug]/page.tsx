;
  import { SanityDocument } from '@sanity/client';
  import {  BlogPost as BlogPostType, Category } from '../../../types';
  import sanityClient from '../../../client';
  import BlogPost from '../../../components/BlogPost'
  import LayoutWrapper from '@/components/LayoutWrapper';


  async function fetchPost(slug:string) {
    try {
      const postRes = await sanityClient
      .fetch(
        `*[_type == "post" && slug.current == '${slug}']{mainImage {asset -> {url}}, title, body,author->, publishedAt, slug, categories[]->}`
      )
  
      const categoriesRes = await sanityClient.fetch(`
      *[_type == 'post'] {
        categories[]->{
          title,
          name
        }
      }
    `);
  
    const recentPostsResult = await sanityClient
    .fetch(
      `*[_type == "post" && slug.current == '${slug}'][0...2]{ title, publishedAt, slug} | order(publishedAt desc)`
    )
    return {post: postRes as BlogPostType[], categories: categoriesRes, recentPosts: recentPostsResult as BlogPostType[]};

    
    }

    catch(erorr) {
console.warn(erorr)
return {post: [] as BlogPostType[], categories: [], recentPosts: [] as BlogPostType[]};
}
  }
  
  
  
  
  const getCategories =(data:SanityDocument[]) => {
    
  
    // Process the data to group and count categories
    const groupedCategories: { [key: string]: Category } = {};
    data.forEach((post) => {
      post.categories.forEach(
        (category: { _id: string; title: string; name: string; count: number }) => {
          const categoryId = category._id;
          if (!groupedCategories[categoryId]) {
            groupedCategories[categoryId] = {
              category: category.title,
              count: 0,
              name:category.name
            };
          }
          groupedCategories[categoryId].count += 1;
        }
      );
    });
  
    return Object.values(groupedCategories);
  };
  
  const Index = async ({params}:{params:{slug:string}}) => {

  
    const {categories:categoriesData, recentPosts, post:blogPostData} = await fetchPost(params.slug)
    const categories = getCategories(categoriesData as SanityDocument[])


    
  
  
  
    return (
      <LayoutWrapper>
      <BlogPost categories={categories} blogPostData={blogPostData} recentPosts={recentPosts} />

      </LayoutWrapper>
    );
  };
  
  export default Index;
  