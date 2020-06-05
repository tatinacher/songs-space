import styled from "styled-components";
import img from "assets/img/background.jpg";
import { device } from "constants/breakpoints";

export const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBlock = styled.div`
  margin: 10px 15px;
  padding: 40px 0;
  display: flex;
  width: 100%;
`;

export const Background = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg);
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
    display: flex;
    padding-top: 40px;
  }
`;
