# Next.js Sanity Landing Page + Blog

This project is a landing page and blog built with Next.js and Sanity. It uses Bootstrap for layout and styled components for styling.

## Features

- Landing page with sections for showcasing your product or service.
- Blog with categories and posts fetched from Sanity.
- Responsive design using Bootstrap grid system and styled components.
- Customizable styles using styled components.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering.
- [Sanity](https://www.sanity.io/) - Headless CMS for managing content.
- [Bootstrap](https://getbootstrap.com/) - CSS framework for responsive design.
- [Styled Components](https://styled-components.com/) - CSS-in-JS library for styling components.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/EasyWeb24/easyweb-nextjs
   ```

2. Install dependencies:

   ```bash
   cd your-repository
   npm install
   ```

3. Set up Sanity:

   - Follow the [Sanity documentation](https://www.sanity.io/docs) to set up your Sanity project and configure your schemas.

4. Set environment variables:

   - Create a `.env.local` file in the root of your project.
   - Add your Sanity project ID and dataset name to the `.env.local` file:

     ```
     SANITY_PROJECT_ID=your-project-id
     SANITY_DATASET_NAME=your-dataset-name
     ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Demo

You can see a demo of the project at [Demo URL](https://your-demo-url.com).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
