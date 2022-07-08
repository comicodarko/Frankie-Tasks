import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: var(--black);
  opacity: 0;
  animation: animationShow 0.7s forwards;
  border: 2px solid var(--pink);
  border-radius: 5px;
  width: 100%;

  @media(max-width: 500px) {
    align-items: flex-start;
    font-size: 0.9rem;
  }
  
  @media(max-width: 450px) {
    justify-content: flex-start;
    font-size: 0.8rem;
  }
`;
