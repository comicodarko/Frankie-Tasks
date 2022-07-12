import styled, { css } from "styled-components";

export const Container = styled.section`
  position: absolute;
  backdrop-filter: blur(3px);
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: .5s;
  > svg {
    position: absolute;
    z-index: 1;
    top: 1.5rem;
    right: 2rem;
    transform: rotate(45deg);
    transition: .7s;
    fill: var(--pink);
  }
 
  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);
    > svg {
      transform: rotate(0deg);
    }
    nav {
      transform: scale(1);
    }
  `}
`;