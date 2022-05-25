import styled from 'styled-components';

export const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  button {
    transition: 0.5s;
  }

  button:hover {
    filter: brightness(1.2);
  }
`;

export const RowBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${props => props.color || 'var(--pink)'};
  padding: 0.5rem;
  font-weight: bold;
  font-size: 1.1rem;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--white);

  svg {
    margin-right: 0.5rem;
  }
`;
