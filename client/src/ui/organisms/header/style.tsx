import styled from 'styled-components';
import { device } from 'constants/breakpoints';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  /*background: var(--bg);*/
  display: flex;
  justify-content: center;
  border-bottom: 2px solid var(--accent);
  position: relative;
  position: fixed;
  width: 100%;
  z-index: 1;
  background: #fff;
  box-shadow: 0 0 10px rgba(173, 150, 150, 0.5);
`;

export const Menu = styled.li`
  list-style-type: none;
  font-weight: 400;
  display: flex;
  align-items: center;
  a {
    padding: 10px 15px;
    text-decoration: none;
    color: var(--bg);
    font-weight: 300;
    cursor: pointer;
    letter-spacing: 1px;
  }
  &:hover {
    background: var(--accent);
    a {
      color: var(--main);
    }
  }

  &:first-child {
    font-size: 25px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;

  @media ${device.tablet} {
    max-width: 350px;
  }
  @media ${device.tablet} {
    max-width: 700px;
  }
  @media ${device.desktop} {
    max-width: 1000px;
  }
`;

export const Hide = styled.div`
  display: none;
`;

export const MenuBlock = styled.div`
  display: flex;
`;

export const Item = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  color: var(--main);
  font-weight: 300;
  cursor: pointer;
  letter-spacing: 1px;
  font-size: 16px;
`;
