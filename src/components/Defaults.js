import styled from 'styled-components';

export const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`

export const RowBetween = styled(Row)`
  justify-content: space-between;
`;

export const DefaultWrapper = styled.section`
  padding: 1rem;
  margin: 1rem;
  border-radius: 1.5rem;
  background: var(--blueDark);
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: hidden;
  min-height: 10rem;
`

export const Button = styled.button`
  background-color: ${props => props.color || 'var(--purple)'};
  padding: 0.5rem;
  font-weight: bold;
  font-size: 1.1rem;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--white);
  transition: 0.5s;

  &:hover {
    background-color: var(--pink);
  }
`;
