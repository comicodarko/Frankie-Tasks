import styled from 'styled-components';

export const MenuWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  background: var(--white);
  border: 2px solid var(--pink);
  height: calc(100% - 2rem);
  border-radius: 1.5rem;
  padding: 1rem;
  margin: 1rem; 

  @media (max-width: 800px){
    display: ${props => props.isMobile ? 'flex' : 'none'};
    width: calc(100% - 3rem);
  }

  h1 {
    font-weight: 400;
    color: var(--blueDark);

    span {
      color: var(--pink);
    }
  }

  footer {
    color: var(--blueDark);
    position: absolute;
    bottom: 1rem;
    left: 0rem;
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 500;
    a {
      color: var(--pink);
      
    }
  }
`;
