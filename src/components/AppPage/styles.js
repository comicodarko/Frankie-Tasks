import styled from 'styled-components';
import { ChevronDoubleUp } from '@styled-icons/fluentui-system-filled';

export const AppWrapper = styled.main`
  display: flex;
  height: 94vh;
  width: 97vw;
  background-color: var(--black);
  margin: 3vh auto;
  border-radius: 2.2rem;

  @media(max-width: 700px) {
    height: 97vh;
    width: 95vw;
    margin: 1.5vh 2.5vw;
    border-radius: 1.5rem;
  }
`;

export const MobileMenuIcon = styled(ChevronDoubleUp)`
  display: none;
  z-index: 1;
  position: absolute;
  fill: var(--pink);
  bottom: 1rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  margin-left: auto;

  @media (max-width: 800px){
    display: flex;
  }
`