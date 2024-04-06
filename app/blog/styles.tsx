'use client'

import styled from 'styled-components';

export const Container = styled.section`
  background-color: hsl(0, 0%, 95%);
  @media (max-width: 760px) {
    & {
      padding: 64px 32px;
    }
  }
  padding: 128px 384px;
`;

export const BlogItem = styled.div`
  border-bottom: 4px solid hsl(210, 100%, 75%);
  background-color: hsl(0, 0%, 100%);
  border-radius: 8px;
  padding: 0;
  width: 384px;

  @media (max-width: 760px) {
    & {
      width: 100%;
    }
  }

  img {
    width: 100%;
    height: 192px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }

  div {
    padding: 24px;

    a {
      font-weight: 600;
      font-size: 24px;
      color: inherit;
      text-decoration: none;
      line-height: 1;

      display: inline-block;


    }

    p {
      font-weight: 400;
      color: hsl(0, 0%, 55%);
      margin-top: 12px;
      font-size: 14px;
    }

    div {
      padding: 0;
      margin-top: 12px;
      font-size: 14px;
      span {
        font-weight: 400;
        color: hsl(0, 0%, 55%);
        i {
          margin-right: 4px;
        }
        display: inline-block;
        &:not(:last-of-type) {
          margin-right: 12px;
        }
      }
    }
  }
`;
