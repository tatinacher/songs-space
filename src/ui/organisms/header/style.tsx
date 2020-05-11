import styled from "styled-components";
import { device } from "constants/breakpoints";

export const Nav = styled.nav`
  background: var(--bg);
  display: flex;
  justify-content: center;
`;

export const Menu = styled.li`
  list-style-type: none;
  padding: 10px 15px;
  font-weight: 400;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: var(--main);
    font-weight: 300;
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: 1px;
  }
  &:first-child {
    font-size: 25px;
  }
`;

export const Content = styled.div`
  display: flex;
  @media ${device.tablet} {
    max-width: 350px;
  }
  @media ${device.desktop} {
    max-width: 1000px;
    width: 100%;
  }
`;
