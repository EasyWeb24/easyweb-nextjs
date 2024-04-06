import { BlogPost } from '@/types';
import sanityClient from '../../client';
import MainBlogTop from '../../components/MainBlogTop'
import LayoutWrapper from '@/components/LayoutWrapper';


async function fetchPosts() {
    const res = await sanityClient
    .fetch(
      '*[_type == "post"]{mainImage {asset -> {url}}, title, description,author->, publishedAt, slug, categories[]->}'
    )

  
  
    return res as BlogPost[];
  }
  

const Index = async () => {
 const posts = await fetchPosts()

  

  return (
  <LayoutWrapper>
    <MainBlogTop posts={posts}/>
  </LayoutWrapper>
  );
};

export default Index;
