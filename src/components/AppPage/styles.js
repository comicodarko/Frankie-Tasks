import styled from 'styled-components';

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
