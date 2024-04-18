
import styled from 'styled-components';

export const Container = styled.section`
  background-color: hsl(0, 0%, 95%);
  @media (max-width: 760px) {
    & {
      padding: 64px 16px;
      width: 100%;
    }
  }
  padding: 96px 64px;

  & .blog-post-wrapper {
    display: flex;
    gap: 24px;
  }
`;

export const BlogPost = styled.section`
  position: relative;
  background-color: hsl(0, 0%, 100%);
  border-radius: 8px;
  width: 768px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15) 0 3px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 760px) {
    & {
      width: 100%;
    }
  }

  & .blog-text-content-wrapper {
    padding: 64px 48px;

    @media (max-width: 760px) {
      & {
        padding: 32px 24px;
      }
    }
  }

  img {
    width: 100%;
    height: 384px;
    object-fit: cover;

    border-radius: 8px 8px 0 0;

    @media (max-width: 760px) {
      & {
        height: 256px;
      }
    }
  }

  h3 {
    line-height: 1;
    font-size: 36px;
    font-weight: 600;
    margin-block: 48px;
    position: relative;
 
  
    position: relative;
    @media (max-width: 760px) {
      & {
        font-size: 24px;
        font-weight: 600;
      }
    }

    @media (max-width: 760px) {
      & {
        margin-top: 24px;
      }
    }
  }

  p {
    margin-top: 48px;
    @media (max-width: 760px) {
      & {
        margin-top: 24px;
      }
    }
    font-size: 16px;
    line-height: 1.75;
    color: hsl(0, 0%, 15%);
  }
`;

export const MetaDataWrapper = styled.div`
  & .meta-data-inner-wrapper {
    position: relative;
    width: fit-content;
    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      width: 100%;
      height: 2px;
      transform: translateY(8px);
      background-color: hsl(210, 100%, 65%);
      left: 0;
      border-radius: 10px;
    }
  }
  span {
    font-size: 14px;
    position: relative;
    font-weight: 400;
    display: inline-block;
    color: hsl(0, 0%, 55%);

    i {
      margin-right: 4px;
    }

    &:not(:last-of-type) {
      margin-right: 16px;
      @media (max-width: 760px) {
        & {
          margin-right: 12px;
        }
      }
    }
  }
`;

export const RecentPostsDisplay = styled.div`
  @media (max-width: 760px) {
    & {
      display: none;
    }
  }
  & .heading {
    color: hsl(0, 0%, 15%);
    font-size: 16px;
    text-transform: capitalize;
    position: relative;
    border-top: 2px solid hsl(210, 100%, 65%);
    background-color: hsl(0, 0%, 100%);
    padding: 16px;
    font-weight: 400;
    width: fit-content;
    font-size: 14px;

    border-radius: 4px;
  }

  & .post-items-wrapper {
    background-color: hsl(0, 0%, 95%);
    margin-top: 16px;
    & .post-item {
      padding: 12px;
      background-color: hsl(0, 0%, 100%);
      color: hsl(0, 0%, 15%);
      margin-bottom: 4px;
      font-size: 14px;
      border-left: 2px solid hsl(210, 100%, 75%);
      display: inline-block;
      text-decoration: none;
      width: 100%;
      border-radius: 4px;
      text-decoration: underline;

      color: hsl(210, 100%, 25%);
      font-weight: 400;
    }
  }
`;

export const CategoriesDisplay = styled.div`
  @media (max-width: 760px) {
    & {
      display: none;
    }
  }

  margin-top: 64px;
  & .heading {
    color: hsl(0, 0%, 15%);
    font-size: 16px;
    text-transform: capitalize;
    position: relative;
    border-top: 2px solid hsl(210, 100%, 65%);
    background-color: hsl(0, 0%, 100%);
    padding: 16px;
    font-weight: 400;
    width: fit-content;
    font-size: 14px;

    border-radius: 4px;
  }

  & .categories-wrapper {
    background-color: hsl(0, 0%, 95%);
    margin-top: 16px;
    & .category-item {
      padding: 12px;
      background-color: hsl(0, 0%, 100%);
      color: hsl(0, 0%, 15%);
      margin-bottom: 4px;
      font-size: 14px;
      border-left: 2px solid hsl(210, 100%, 75%);
      display: inline-block;
      text-decoration: none;
      width: fit-content;

      border-radius: 4px;
      a {
        text-decoration: underline;

        color: hsl(210, 100%, 25%);
      }
      font-weight: 400;

      .count {
        color: hsl(0, 0%, 15%);
        margin-left: 12px;
        text-decoration: none;
      }
    }
  }
`;
