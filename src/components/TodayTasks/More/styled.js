import styled from 'styled-components';

export const Tooltip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div.contentWrapper {
    display: flex;
    flex-wrap: wrap;
    background: var(--black);
    opacity: 0;
    padding-right: 2rem;
    display: none;
    margin-right: 1rem;
    animation: animationShow 0.7s forwards;
    border: 1px solid var(--white);
    border-radius: 5px;

    span.marker {
      width: 15px;
      height: 15px;
      background: var(--black);
      transform: rotate(-45deg);
      border-bottom: 1px solid var(--white);
      border-right: 1px solid var(--white);
      border-bottom-right-radius: 5px;
      z-index: 1;
      margin-left: 1rem;
      margin-right: calc(-1rem + -8px);
    }
  }

  :hover div.contentWrapper,
  :hover span.marker {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
