import styled from '@emotion/styled';

export const Container = styled.section`
  padding: 96px 128px;
  border-top: 3px solid #0073e6;
  overflow: hidden;
  position: relative;

  &::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 50%;
    transform: translateY(-50%);
    content: '';

    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2380bfff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
    background-position: center center;
    width: 384px;
    height: 384px;
    z-index: -2;
  }

  @media (max-width: 760px) {
    & {
      padding: 64px 32px;
    }
  }
`;

export const SectionTextHeading = styled.span`
  color: hsl(0, 0%, 0%);
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

export const FAQItem = styled.div`
  @media (max-width: 760px) {
    & {
      width: 100%;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    & {
      width: 384px;
    }
  }
  width: 640px;
  button:first-of-type {
    color: hsl(210, 100%, 95%);
    box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
    background: linear-gradient(
      30deg,
      hsl(210, 100%, 25%),
      hsl(210, 100%, 35%)
    );
    box-shadow: none;

    &::after {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='hsl(210, 100%, 95%)'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    }
  }

  div:first-of-type {
    border: 0;
    background-color: hsl(210, 100%, 95%);
    color: hsl(210, 100%, 15%);
  }
`;

export const FAQItemsWrapper = styled.div`
  margin-top: 96px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 48px;
  justify-content: center;

  @media (max-width: 760px) {
    & {
      flex-direction: column;
      gap: 32px;
      margin-top: 48px;
    }
  }
`;
