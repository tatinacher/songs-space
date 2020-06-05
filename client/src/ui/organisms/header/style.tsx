import styled from "styled-components";
import { device } from "constants/breakpoints";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: var(--bg);
  display: flex;
  justify-content: center;
  border-bottom: 2px solid var(--accent);
  position: relative;
`;

export const Menu = styled.li`
  list-style-type: none;
  font-weight: 400;
  display: flex;
  align-items: center;
  font-family: sans-serif;
  a {
    padding: 10px 15px;
    text-decoration: none;
    color: var(--main);
    font-weight: 300;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 1px;
  }
  &:hover {
    background: var(--accent);
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
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;
  font-size: 16px;
`;
