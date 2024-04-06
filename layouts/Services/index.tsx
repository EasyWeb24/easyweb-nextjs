'use client'
import {
    Container,
    SectionTextHeading,
    ServiceItem,
    ServiceItemsWrapper,
  } from './styles';
  import ServiceImage from '../../public/service_image.jpg';
  import ServiceImage2 from '../../public/service_image_2.jpg';
  import ServiceImage3 from '../../public/service_image_3.jpg';
  import ServiceImage4 from '../../public/service_image_4.jpg';
  
import Image from 'next/image';
import Link from 'next/link';
  
  const serviceItems = [
    {
      serviceTitle: 'Responsive Web Design',
      serviceName: 'responsive-web-design',

      serviceDescription:
        'We ensure websites are optimized for various devices, providing a consistent user experience across all devices.',
      serviceImage: ServiceImage,

    },
    {
      serviceName: 'website-maintenance ',
      serviceDescription:
        'We offer support and maintenance services, utilizing the best web technologies and tools, like Google Analytics.',
      serviceImage: ServiceImage2,
      serviceTitle: 'Website Maintenance ',

    },
    {
      serviceName: 'website-redesign',
      serviceDescription:
        'Our professionals help improve the user experience, styling, and functionality of existing websites.',
      serviceImage: ServiceImage4,
      serviceTitle: 'Website Redesign ',

    },
    {
      serviceName: 'domain-hosting-and-setup',
      serviceDescription:
        'We assist clients in obtaining the best domain names and hosting for their websites.',
      serviceImage: ServiceImage3,      
      serviceTitle: 'Domain Hosting and Setup',


    },
  ];
  
  const index: React.FC = () => {
    return (
      <Container>
        <div className="text-lg-center text-sm-end">
          <SectionTextHeading>What We Do</SectionTextHeading>
        </div>
        <ServiceItemsWrapper>
          {serviceItems.map(
            ({ serviceImage, serviceDescription, serviceName, serviceTitle }) => (
              <ServiceItem key={serviceName}>
                <div>
                  <Image
                    src={serviceImage}
                    alt="A MacBook Pro next to other devices"
                  />
                  <div>
                    <Link href={`/services#${serviceName}`}>{serviceTitle}</Link>
                    <p>{serviceDescription}</p>
                  </div>
                </div>
              </ServiceItem>
            )
          )}
        </ServiceItemsWrapper>{' '}
        <div className="text-md-center text-xs-start">
          {' '}
          <Link href="/services" className="services-cta">
            <span>Explore Our Services</span>
          </Link>
        </div>
      </Container>
    );
  };
  
  export default index;
  