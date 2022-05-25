import styled from 'styled-components';

export const TaskWrapper = styled.span`
  display: flex;
  padding: 0.5rem 0;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background-color: var(--black);
  }

  &:not(:last-child) {
    border-bottom: 2px solid var(--black);
  }

  > div {
    display: flex;

    h3 {
      font-size: 1rem;
    }

    h4 {
      margin-top: 0.2rem;
      font-size: 0.7rem;
      color: var(--pink);
    }

    img {
      padding: 0.5rem;
      border: 2px solid var(--black);
      border-radius: 1rem;
      margin-right: 1rem;
      width: 50px;
      height: 50px;
    }
  }
`;
