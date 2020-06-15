import styled from "styled-components";
import { device } from "constants/breakpoints";

export const ButtonPrimary = styled.button`
  padding: 10px 15px;
  font-weight: 300;
  border: 0;
  border-radius: 5px;
  font-size: 16px;
  letter-spacing: 1px;
  background: var(--bg);
  color: var(--main);
  outline: none;
  font-family: "Roboto Mono";

  &:hover {
    cursor: pointer;
    background: var(--accent);
  }

  @media ${device.desktop} {
    font-size: 20px;
    padding: 15px 25px;
  }
`;
