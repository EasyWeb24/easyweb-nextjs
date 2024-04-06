'use client'

import Link from 'next/link';
import {
  Container,
  LeftSideNav,
  LowerSectionTextHeading,
  SectionTextHeading,
} from './styles';
import LayoutWrapper from '@/components/LayoutWrapper';

const Index = () => {
  return (
    <LayoutWrapper>

    <Container>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Services
          </li>
        </ol>
      </nav>
      <div>
        <SectionTextHeading>Services</SectionTextHeading>
      </div>
      <div className="d-flex align-items-baseline lower-section-wrapper ">
        <LeftSideNav>
          <div className={`wrapper`}>
            <ul>
              <li>
                <a href="#responsive-web-design">Responsive Web Design</a>
              </li>
              <li>
                <a href="#web-maintenance-and-support">
                  Web Maintenance and Support
                </a>
              </li>
              <li>
                <a href="#website-redesign">Website Redesign</a>
              </li>
              <li>
                <a href="#e-commerce-development">E-commerce Development</a>
              </li>
              <li>
                <a href="#domain-hosting-and-setup">Domain Hosting and Setup</a>
              </li>
              <li>
                <a href="#full-stack-development">Full-Stack Development</a>
              </li>
              <li>
                <a href="#api-integration-and-setup">
                  API Integration and Setup
                </a>
              </li>
            </ul>
          </div>
        </LeftSideNav>
        <div className="right-side-content">
          <div className="content-inner" id="responsive-web-design">
            <LowerSectionTextHeading>
              <span>Responsive Web Design</span>
            </LowerSectionTextHeading>
            <p>
              We design high end websites that works with any brand and works
              with a wide ranges of devices from landing pages to blogs, real
              estate websites, e-commerce websites and so many other. Our number
              one goal when building these websites is to help your business
              grow and making it easy for your customers to use.
            </p>
          </div>
          <div className="content-inner">
            {' '}
            <LowerSectionTextHeading>
              <span>Website Maintenance and Support</span>
            </LowerSectionTextHeading>
            <p>
              Our team of web designers also provide maintenance and support to
              make sure your website is working properly and meets up to your
              brand&apos;s standard.
            </p>
          </div>
          <div className="content-inner" id="website-redesign">
            <LowerSectionTextHeading>
              <span>Website Redesign</span>
            </LowerSectionTextHeading>
            <p>
              Whether you are looking to gain customers or your website just
              needs a new look and better functionality, we are here to help. We
              provide redesign services to help give your website a modern look
              and still keep it functional.
            </p>
          </div>
          <div className="content-inner" id="e-commerce-development">
            <LowerSectionTextHeading>
              <span>E-Commerce Development</span>
            </LowerSectionTextHeading>
            <p>
              Allow your customers to get the best online shopping experiences
              with what our expert team of web designers offer.
            </p>
          </div>
          <div className="content-inner" id="domain-hosting-and-setup">
            {' '}
            <LowerSectionTextHeading>
              <span>Domain Hosting and Setup</span>
            </LowerSectionTextHeading>
            <p>
              Get the best hosting for your business and a good domain name to
              go along with it. Keep your brand looking sharp with the great
              domain name and hosting services we offer.
            </p>
          </div>
          <div className="content-inner" id="full-stack-development">
            {' '}
            <LowerSectionTextHeading>
              <span>Full-Stack Development</span>
            </LowerSectionTextHeading>
            <p>
              Our expert team of web developers are proficient with both
              frontend and backend technologies. We are experts at building
              safe, fast and secure web applications. Not only can we create the
              best user interfaces we give best server-side logic to match it.
            </p>
          </div>
          <div className="content-inner" id="api-integration-and-setup">
            {' '}
            <LowerSectionTextHeading>
              <span>API Integration and Setup</span>
            </LowerSectionTextHeading>
            <p>
              Our expert team can easily develop APIs that connect and work with
              your web applications effortlessly.Easily connect your backend to
              your frontend. Our team of expert web developers help create APIs
              that allows the the functionality while still keeping it secure
              and safe. We use the latest and best API solutions to get the best
              performance.
            </p>
          </div>
        </div>
      
      </div>
    </Container></LayoutWrapper>
  );
};

export default Index;
