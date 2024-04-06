import styled from '@emotion/styled';

export const Container = styled.section`
  padding: 96px 128px;
  border-top: 3px solid #0073e6;
  background: linear-gradient(30deg, hsl(210, 100%, 25%), hsl(210, 100%, 35%));

  position: relative;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    content: '';

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239ed4ff' fill-opacity='0.42'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-position: center center;
    width: 284px;
    height: 284px;
  }

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239ed4ff' fill-opacity='0.42'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-position: center center;
    width: 284px;
    height: 284px;
    z-index: -2;
  }

  @media (max-width: 760px) {
    & {
      padding: 64px 32px;
    }
  }
`;

export const SectionTextHeading = styled.span`
  color: hsl(210, 100%, 95%);
  font-size: 36px;
  text-transform: capitalize;
  font-weight: 600;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 760px) {
    & {
      align-items: start;
    }
  }
  &::after {
    position: relative;
    content: '';
    width: 96px;
    height: 4px;
    bottom: 0;
    background-color: hsl(210, 100%, 45%);
    border-radius: 16px;
    left: 0;
    @media (max-width: 760px) {
      & {
        height: 3px;
        width: 24px;
      }
    }
  }

  @media (max-width: 760px) {
    & {
      text-align: left;
      font-size: 24px;
    }
  }
`;

export const TestimonialsWrapper = styled.div`
  margin-top: 96px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 64px;
  justify-content: center;

  @media (max-width: 760px) {
    & {
      flex-direction: column;
      gap: 32px;
      margin-top: 48px;
    }
  }
`;

export const TestimonialItem = styled.div`
  position: relative;
  z-index: 2;

  @media (max-width: 760px) {
    & {
      width: 100%;
      padding: 12px;
    }
  }
  padding: 48px;
  width: 384px;
  background-color: hsl(0, 0%, 100%);
  color: hsl(0, 0%, 25%);
  font-weight: 500;
  border-radius: 10px;
  font-size: 16px;
  border-top: 4px solid hsl(210, 100%, 45%);
  p {
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
    position: relative;

    &::after {
      content: '"';
      color: hsl(0, 0%, 80%);
      position: relative;
      font-size: 36px;
    }

    &::before {
      content: '"';
      color: hsl(0, 0%, 80%);
      position: relative;
      font-size: 36px;
    }
  }

  div {
    font-size: 14px;
    font-weight: 400;
    position: relative;
    display: inline-block;
    display: flex;
    align-items: baseline;
    gap: 8px;
    color: hsl(0, 0%, 35%);

    span:first-of-type {
      width: 24px;
      height: 3px;
      background: hsl(0, 0%, 80%);
      position: relative;
      left: 0;
      top: 0;
      display: inline-block;
      content: '';
    }
  }
`;
