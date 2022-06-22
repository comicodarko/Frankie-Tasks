import styled from 'styled-components';

export const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  button {
    transition: 0.5s;
  }

  button:hover {
    background: var(--pink);
  }
`;

export const RowBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DefaultWrapper = styled.section`
  padding: 1rem;
  margin: 1rem;
  flex: 1;
  border-radius: 1.5rem;
  background: var(--blueDark);
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`

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
