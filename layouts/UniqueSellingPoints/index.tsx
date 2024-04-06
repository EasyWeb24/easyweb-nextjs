'use client'

import {
    Container,
    SectionTextHeading,
    SellingPointWrapper,
    SellingPointsWrapper,
  } from './styles';
  
  const sellingPoints = [
    {
      heading: 'Your Vision, Our Expertise',
      bodyText:
        "We try to understand each of our client's project needs to provide custom made designs for our clients and amazing solutions that can fit any brand.",
      icon: <i className="bi bi-lightbulb"></i>,
    },
    {
      heading: 'Dedicated Support',
      bodyText:
        'Get all the benefits of having us 24/7 behind you to assist you in gaining your online presence and improve your marketing online.',
      icon: <i className="bi bi-chat-square"></i>,
    },
    {
      heading: 'Your Budget, Your Excellence',
      bodyText:
        'Get the best marketing with the best digital marketing agency and the best fit for your budget without losing the quality or impact of your brand.',
      icon: <i className="bi bi-wallet"></i>,
    },
    {
      heading: 'Your Loss, Our Loss',
      bodyText:
        'At our company, we believe only on clients success and we try to understand each client with the help of our digital marketing experts to get the best results.',
      icon: <i className="bi bi-wallet2"></i>,
    },
  ];
  
  const index: React.FC = () => {
    return (
      <Container>
        <div className="text-lg-center text-sm-end">
          <SectionTextHeading>Value we provide</SectionTextHeading>
        </div>
        <SellingPointsWrapper>
          {sellingPoints.map(({ heading, bodyText, icon }) => (
            <SellingPointWrapper key={heading}>
              <div>
                <span className=" circle   d-flex align-items-center justify-content-center">
                <span className='position-relative icon'>
                {icon}</span> 
<span className="wave   ">
</span>                 
                </span>
                <span className='heading'>{heading}</span>
              </div>
              <p>{bodyText}</p>
            </SellingPointWrapper>
          ))}
          </SellingPointsWrapper>
      </Container>
    );
  };
  
  export default index;
  