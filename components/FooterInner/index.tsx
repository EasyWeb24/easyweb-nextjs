'use client'


import { Container, FooterHeadingText, FooterInfoWrapper, FooterServiceList, RecentPostsWrapper, SectionTextHeading } from "./styles"
import { BlogPost } from "@/types"
import Image from "next/image"
import Link from "next/link"
import Moment from "react-moment"

const index = ({data}:{data: BlogPost[]}) => {
    const serviceList = [
        { name: 'Website Redesign', path: 'website-redesign' },
        { name: 'Responsive Web Design', path: 'responsive-web-design' },
        { name: 'Website Maintenance', path: 'website-maintenance' },
        { name: 'Domain hosting and Setup', path: 'domain-hosting-and-setup' },
      ];


  return (
    <Container>
        <FooterInfoWrapper>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <SectionTextHeading>
                  {' '}
                  <i className="bi bi-code"></i>EasyWeb
                </SectionTextHeading>
                <div className="contact-info">
                  <a href="mailto:info@easyweb.com.ng">info@easyweb.com.ng</a>
  
                  <a href="tel:+23408128795195">08128795195</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 w-256">
                <div>
                  <FooterHeadingText>
                    <span>Services</span>
                  </FooterHeadingText>
                  <FooterServiceList>
                    {serviceList.map((service) => (
                      <li key={service.name}>
                        <span className="d-flex align-items-center  justify-content-center ">
                          <i className="bi bi-gear"></i>
                        </span>{' '}
                        <Link href={`/services#${service.path}`}>
                          <span>{service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </FooterServiceList>
                </div>
              </div>
  
              <div className="col-lg-4 col-md-12">
                <div>
                  <FooterHeadingText>
                    <span>Recent Blog Posts</span>
                  </FooterHeadingText>
                  <RecentPostsWrapper>
                     {(data.map(({ publishedAt, title, mainImage, slug }) => (
                        <div className="recent-post" key={title}>
                          <Image width={'8000'} height={'8000'} src={mainImage.asset.url} alt="" />
                          <div>
                            <Link
                              href={`/blog/${slug.current}`}
                              className="title-link"
                            >
                              {title}
                            </Link>
                            <span className="date">
                              <Moment format="MMMM DD, YYYY">
                                {publishedAt}
                              </Moment>
                            </span>
                          </div>
                        </div>
                      ))
                    ) }
                  </RecentPostsWrapper>
                </div>
              </div>
            </div>
          </div>
        </FooterInfoWrapper>
      </Container>
  )
}

export default index