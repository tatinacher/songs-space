import styled from "styled-components";

export const ButtonPrimary = styled.button`
  padding: 10px 15px;
  font-weight: 300;
  border: 0;
  border-radius: 5px;
  font-size: 16px;
  letter-spacing: 1px;
  background: var(--bg);
  color: var(--main);
  &:hover {
    cursor: pointer;
    background: var(--accent);
  }
`;
