import styled from "styled-components";
import img from "assets/img/background.jpg";
import { device } from "constants/breakpoints";

export const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBlock = styled.div`
  padding: 40px 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Background = styled.div`
  height: 300px;
  width: 100%;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const Content = styled.div`
  @media ${device.tablet} {
    max-width: 350px;
  }
  @media ${device.desktop} {
    max-width: 1000px;
    width: 100%;
  }
`;
