import styled from "styled-components";

export const Nav = styled.nav`
  background: #ffd23f;
  display: flex;
  display: flex;
  align-items: center;
`;

export const Menu = styled.li`
  list-style-type: none;
  padding: 10px 15px;
  font-weight: 400;
  a {
    text-decoration: none;
    color: var(--primary);
    font-weight: 400;
    cursor: pointer;
  }
  &:first-child {
    font-size: 25px;
  }
`;
