import styled from 'styled-components';

export const MenuWrapper = styled.nav`
  background: var(--white);
  height: calc(100% - 2rem);
  border-radius: 1.5rem;
  padding: 1rem;
  margin: 1rem;

  @media(max-width: 750px) {
    display: none;
  }

  h1 {
    font-weight: 400;
    color: var(--black);

    span {
      color: var(--pink);
    }
  }

  nav {
    margin: 4rem 0;
  }

  footer {
    color: var(--gray);
    position: absolute;
    bottom: 1rem;
    width: 100%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    font-size: 0.9rem;
    a {
      color: var(--gray);
    }
  }
`;
