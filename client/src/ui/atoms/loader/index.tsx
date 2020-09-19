import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  `;

export const Loader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 3em;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  animation: 1s infinite ease-in-out;
  background-color: var(--accent);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  &::before,
  &::after {
    animation: 1s infinite ease-in-out;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }
  &::before {
    content: '';
    border: 10px solid white;
    top: -10px;
    left: -10px;
    animation-name: ${fadeIn};
  }
`;
