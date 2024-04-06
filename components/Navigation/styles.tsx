import styled from '@emotion/styled';

export const Container = styled.div`
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='hsl(0, 0%, 75%)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }
  .navbar {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .navbar.sticky {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000 !important;
    background-color: rgba(0, 0, 0, 0.9);
  }
  .navbar-cta {
    position: relative;
    span {
      position: relative;
      z-index: 2;
      font-size: 14px;
    }
    &::after {
      position: absolute;
      content: '';
      top: 0;
      width: 100%;
      height: 0;
      background-color: hsl(210, 100%, 25%);
      left: 0;
      border-radius: 8px;
      transition: all 0.4s ease-in;
    }

    &:hover {
      &::after {
        height: 100%;
      }
    }
    padding: 12px 32px;
    background-color: hsl(210, 100%, 45%);
    color: hsl(210, 100%, 95%);
    text-decoration: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
    display: inline-block;
    @media (max-width: 760px) {
      & {
        padding: 8px 16px;
        border-radius: 8px;
      }
    }
  }

  .nav-link {
    color: hsl(0, 0%, 85%);
    font-size: 14px;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      top: 32px;
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
    &.active {
      color: hsl(0, 0%, 100%);
      position: relative;

      &::after {
        position: absolute;
        content: '';
        top: 32px;
        width: 100%;
        height: 3px;
        background-color: hsl(210, 100%, 45%);
        left: 0;
        border-radius: 10px;
      }
    }
  }

  .navbar-brand {
    color: hsl(0, 0%, 100%);
    font-size: 16px;
    font-weight: 600;
  }
  .px-nav {
    padding-inline: 128px;
    @media (max-width: 760px) {
      & {
        padding-inline: 48px;
      }
    }
  }
  .py-nav {
    padding-block: 4px;
    @media (max-width: 760px) {
      & {
        padding-block: 4px;
      }
    }
  }
`;
