import styled from "styled-components";
import { device } from "constants/breakpoints";

export const Nav = styled.nav`
  background: var(--bg);
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #d7263d;
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
    background: #d7263d;
  }
  &:first-child {
    font-size: 25px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

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

export const Item = styled.div`
  padding: 10px 15px;
  text-decoration: none;
  color: var(--main);
  font-weight: 300;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;
  font-size: 16px;
`;

export const Form = styled.div`
  width: 200px;
  height: 100px;
  background: #fff;
  position: absolute;
  right: 0;
  top: 55px;
  padding: 15px;
`;
