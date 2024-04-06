import { createClient } from '@sanity/client';



const client = createClient({
  projectId: 'saj612qh',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-04-04',
  
});

export default client;
