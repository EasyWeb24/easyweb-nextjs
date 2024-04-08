
import FooterInner from '../../components/FooterInner'
import sanityClient from '../../client'

interface BlogPost {
    author: {
      name: string;
    };
  
    categories: [
      {
        title: string;
      }
    ];
    body: [];
    publishedAt: string;
    title: string;
    description: string;
    slug: {
      current: string;
    };
    mainImage: {
      asset: {
        url: string;
      };
    };
  }

async function getBlogPosts() {
try {
  const res =  await sanityClient
  .fetch(
    `*[_type == "post"][0...1]{ title, publishedAt, slug, mainImage {asset -> {url}}} | order(publishedAt asc)`
  )
  
  return res as BlogPost[]
}catch (error ) {
  console.warn(error)
  return [] as BlogPost[]

}
  }
  
  
  
  const Index = async () => {
    const data = await getBlogPosts()

  
    return (
    <FooterInner data={data}/>
    );
  };
  
  export default Index;
  