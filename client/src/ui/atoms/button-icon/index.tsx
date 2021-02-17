import styled from 'styled-components';

import { device } from 'constants/breakpoints';

export const ButtonIcon = styled.button<{ icon: string }>`
  outline: none;
  border: 0;
  background: transparent;
  width: 25px;
  height: 25px;
  background-size: cover;
  background-image: url(${(props) => props.icon});

  &:hover {
    cursor: pointer;
  }

  @media ${device.desktop} {
    width: 30px;
    height: 30px;
  }
`;
