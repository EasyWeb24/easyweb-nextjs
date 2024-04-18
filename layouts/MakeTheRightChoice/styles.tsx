import styled from '@emotion/styled';

export const Container = styled.section`
  position: relative;
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239ed4ff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-position: center center;
    width: 284px;
    height: 284px;
  }

  .left-img-wrapper {
    width: 384px;
    height: 512px;
    border-radius: 8px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    & {
      padding: 96px 64px;
    }
  }
  @media (max-width: 760px) {
    & {
      padding: 96px 32px;
    }
  }
  padding: 96px 128px;
  background: linear-gradient(30deg, hsl(210, 100%, 25%), hsl(210, 100%, 35%));
  color: hsl(210, 100%, 95%);
  p:first-of-type {
    line-height: 1.5;
    margin-bottom: 64px;
  }
`;

export const SectionTextHeading = styled.span`
  font-size: 30px;
  text-transform: capitalize;
  font-weight: 600;
  position: relative;

 

  @media (max-width: 760px) {
    & {
      text-align: left;
      font-size: 24px;
    }
  }
`;

export const WhatWeOfferList = styled.ul`
  margin-top: 48px;
  padding: 0;
  display: block;

  li {
    list-style-type: none;
    display: flex;
    gap: 16px;
    margin-top: 32px;
    align-items: baseline;
    flex-wrap: wrap;
    @media (min-width: 768px) and (max-width: 991.98px) {
      & {
        gap: 8px;
      }
    }
    @media (max-width: 760px) {
      & {
        gap: 8px;
      }
    }

    span {
      &:first-of-type {
        color: hsl(210, 100%, 95%);

        display: inline-block;
      }
      &:last-of-type {
        margin-top: 12px;
        display: inline-block;
        line-height: 1.5;
        width: 384px;
        @media (min-width: 768px) and (max-width: 991.98px) {
          & {
            width: 512px;
          }
        }
        @media (max-width: 760px) {
          & {
            width: 256px;
          }
        }
      }
    }
  }
`;
