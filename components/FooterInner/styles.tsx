'use client'

import styled from 'styled-components';

export const Container = styled.section`
  padding: 96px 128px;
  padding-bottom: 24px;
  position: relative;
  background: linear-gradient(30deg, hsl(0, 0%, 0%), hsl(0, 0%, 25%));
  @media (min-width: 768px) and (max-width: 991.98px) {
    & {
      padding: 96px 64px;
    }
  }
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23bfbfbf' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
    background-position: center center;
    width: 100%;
    height: 48px;
  }

  .w-256 {
    width: 256px;
  }

  @media (max-width: 760px) {
    & {
      padding: 64px 32px;
    }
  }
`;

export const SectionTextHeading = styled.span`
  color: #f2f2f2;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 600;
  position: relative;
  display: inline-block;
  margin-bottom: 24px;

  i {
    margin-right: 4px;
  }

  &::after {
    position: absolute;
    content: '';
    top: 24px;
    width: 100%;
    height: 3px;
    background-color: hsl(210, 100%, 45%);
    left: 0;
    border-radius: 10px;
  }
`;

export const FooterInfoWrapper = styled.div`
  color: hsl(0, 0%, 85%);

  div:first-of-type {
    .contact-info a {
      font-size: 16px;
      display: block;
      position: relative;
      width: fit-content;
      color: inherit;
      text-decoration: none;
      &::after {
        position: absolute;
        content: '';
        bottom: 0;
        width: 0;
        height: 3px;
        background: linear-gradient(
          30deg,
          hsl(210, 100%, 25%),
          hsl(210, 100%, 35%)
        );
        left: 0;
        border-radius: 10px;
        transition: all 0.4s ease-in-out;
      }
      &:hover {
        color: hsl(0, 0%, 100%);
        &::after {
          width: 100%;
          height: 3px;
        }
      }

      &:not(:last-of-type) {
        margin-bottom: 16px;
      }
    }
  }

  @media (max-width: 991.98px) {
    div.row {
      gap: 48px;
    }
  }
`;

export const FooterHeadingText = styled.div`
  color: hsl(0, 0%, 95%);
  font-size: 18px;
  text-transform: capitalize;
  position: relative;
  display: inline-block;
  span {
    margin-left: 8px;
  }

  &::after {
    position: absolute;
    content: '';
    width: 4px;
    height: 100%;
    background-color: hsl(210, 100%, 45%);
    left: 0;
    top: 0;
    border-radius: 16px;
  }
`;

export const FooterServiceList = styled.ul`
  padding: 0;

  display: block;

  li {
    list-style-type: none;
    display: flex;
    gap: 8px;
    margin-top: 12px;
    align-items: baseline;
    flex-wrap: wrap;
    color: hsl(0, 0%, 85%);
    transition: all 0.4s ease-in-out;

    &:hover {
      margin-left: 4px;
      color: hsl(0, 0%, 100%);
    }

    a {
      color: inherit;
    }

    span {
      &:first-of-type {
        display: inline-block;
      }
      &:last-of-type {
        margin-top: 12px;
        display: inline-block;
        line-height: 1.5;
      }
    }
  }
`;

export const BlogItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RecentPostsWrapper = styled.div`
  margin-top: 24px;

  & .recent-post {
    display: flex;
    color: hsl(0, 0%, 85%);
    gap: 12px;
    width: 256px;
    @media (min-width: 768px) and (max-width: 991.98px) {
      & {
        flex-direction: column;
      }
    }
    a.title-link {
      color: inherit;
      text-decoration: none;
      font-weight: 500;
      line-height: 1;
      display: inline-block;
      margin-bottom: 8px;

      &:hover {
      color: hsl(0, 0%, 95%);

      }
    }

    span {
      font-size: 14px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 4px;
      object-fit: cover;
    }
  }
`;
