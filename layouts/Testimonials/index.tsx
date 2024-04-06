'use client'
import {
    Container,
    SectionTextHeading,
    TestimonialItem,
    TestimonialsWrapper,
  } from './styles';
  
  const reviews = [
    {
      review:
        'It wasn’t too easy, probably because of my choice of design but we made. I appreciate your input, patience and desire to make sure that my design was achieved. Thank you ',
      reviewer: 'Tersoo Agber (Teesool), Owner of Grandstyle',
    },
    {
      review: "Beautiful Work, easiest service I've ever worked with",
      reviewer: 'Wayne Ipole, Owner of 2shotstudios',
    },
  ];
  
  const index: React.FC = () => {
    return (
      <Container>
        <div className="text-lg-center text-sm-end">
          <SectionTextHeading>Here&apos;s What Our Clients Say</SectionTextHeading>
        </div>
        <TestimonialsWrapper>
          {reviews.map(({ review, reviewer }) => (
            <TestimonialItem key={review}>
              <p>{review}</p>
              <div>
                <span></span>
                <span>{reviewer}</span>
              </div>
            </TestimonialItem>
          ))}
        </TestimonialsWrapper>
      </Container>
    );
  };
  
  export default index;
  