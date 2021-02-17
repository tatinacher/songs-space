import styled from 'styled-components';

import { device } from 'constants/breakpoints';

export const TableLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media ${device.tablet} {
    width: 700px;
  }
  @media ${device.desktop} {
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
