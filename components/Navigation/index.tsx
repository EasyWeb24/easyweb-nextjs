'use client'

import { useEffect, useState } from 'react';
import { Container } from './styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About Us',
    path: '/about-us',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
];

const Index: React.FC = () => {
  const [isSticky, setSticky] = useState(false);
  const  pathname  = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <nav
        className={`navbar navbar-expand-lg     w-100 ${
          isSticky ? ' sticky' : ''
        }`}
      >
        <div className="container-fluid px-nav py-nav">
          <Link className="navbar-brand" href="/">
            <i className="bi bi-code"></i> EasyWeb
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"></li>
              {NavLinks.map(({ path, name }) => (
                <li className="nav-item" key={name}>
                  <Link
                    className={`nav-link ${pathname === path && 'active'}`}
                    aria-current={pathname === path ? 'page' : undefined}
                    href={`${path}`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <a  target="_blank"
        rel="noopener noreferrer" href="https://wa.me/+23408128795195" className="navbar-cta">
              <span>Get a free quote</span>
            </a>
          </div>
        </div>
      </nav>{' '}
    </Container>
  );
};

export default Index;
