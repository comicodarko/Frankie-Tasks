import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  margin-bottom: 0rem;
  min-height: 3.5rem;
  max-width: 100%;
  
  @media(max-width: 700px) {
    flex-wrap: wrap;
    margin: 0.5rem 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
  }

  > button {
    margin-bottom: auto;
  }
`;
