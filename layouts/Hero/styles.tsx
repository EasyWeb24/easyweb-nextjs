'use client'

import styled from '@emotion/styled';

export const Container = styled.section`
  padding: 96px 128px;

  position: relative;
  color: hsl(0, 0%, 100%);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: hsl(210, 100%, 45%);
    mix-blend-mode: multiply;
    filter: grayscale(20%);
    z-index: -1; /* Ensure the pseudo-element is behind the content */
  }
  @media (max-width: 760px) {
    & {
      padding: 96px 32px;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Black overlay with 50% opacity */
`;

export const ButtonWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  gap: 24px;
  align-items: baseline;

  a {
    &:first-of-type {
      font-weight: 600;
      span {
        position: relative;
        z-index: 2;
      }
      position: relative;
      padding: 8px 16px;
      background-color: hsl(210, 100%, 45%);
      color: hsl(210, 100%, 95%);
      text-decoration: none;
      border-radius: 8px;
      box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
      &::after {
        position: absolute;
        content: '';
        left: 0;
        height: 100%;
        width: 0;
        top: 0;
        background-color: hsl(210, 100%, 25%);
        left: 0;
        border-radius: 8px;
        transition: all 0.4s ease-in-out;
      }

      &:hover {
        box-shadow: none;
        &::after {
          width: 100%;
        }
      }
    }

    &:last-of-type {
      display: inline-block;
      color: hsl(210, 100%, 55%);
      font-weight: 500;

      &:hover {
        color: hsl(210, 100%, 65%);

      }
    }
  }

  @media (max-width: 760px) {
    & {
      margin-bottom: 48px;
      gap: 12px;
      flex-direction: column;
    }
  }
`;

export const HeadingTextWrapper = styled.div`
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.75;
  }

  span {
    margin-bottom: 64px;
    line-height: 1;
    font-weight: 500;
    font-size: 30px;
    display: inline-block;
    position: relative;

   

    @media (max-width: 760px) {
      & {
        margin-bottom: 48px;
      }
    }
  }
`;

export const HeroReviewWrapper = styled.div`
  margin-top: 48px;

  span {
    i {
      color: #ffd700;
    }

    i:not(:first-of-type) {
      margin-left: 8px;
      display: inline-block;
    }

    &:last-of-type {
      color: hsl(0, 0%, 60%);
      margin-left: 12px;
    }
  }

  @media (max-width: 760px) {
    & {
      margin-top: 24px;
    }
  }
`;
