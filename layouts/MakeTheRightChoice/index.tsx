'use client'

import { Container, SectionTextHeading, WhatWeOfferList } from './styles';
import OffersIllustration from '../../public/13297951_5187967.jpg';
import Image from 'next/image';

const index: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <div className="row align-items-center   ">
          <div className="col-md-6 col-xs-12 ">
            <p>
              Don&apos;t let your credibility get damaged by bad web designers. You
              shouldn&apos;t lose potential customers and waste your money because of
              quacks and unprofessional people
            </p>
            <SectionTextHeading>What do we offer?</SectionTextHeading>
            <WhatWeOfferList>
              <li>
                <span className="d-flex align-items-center  justify-content-center ">
                  <i className="bi bi-person-lock"></i>
                </span>
                <span>
                  The best use of technologies, expert knowledge and individuals
                </span>
              </li>{' '}
              <li>
                <span className="d-flex align-items-center  justify-content-center ">
                  <i className="bi bi-person-lock"></i>
                </span>
                <span>
                  Peace of mind that you have the 24/7 customer support and the
                  best web design professionals on your project
                </span>
              </li>{' '}
              <li>
                <span className="d-flex align-items-center  justify-content-center ">
                  <i className="bi bi-person-lock"></i>
                </span>
                <span>
                  Professionals that can adapt to any situation or technologies
                </span>
              </li>
            </WhatWeOfferList>
          </div>
          <div className="col-md-6 d-none d-md-block ">
            <Image alt='' src={OffersIllustration}   className="left-img-wrapper" width={'800'} height={'800'} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default index;
