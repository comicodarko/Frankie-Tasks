import styled from 'styled-components';

export const MenuItemWrapper = styled.button`
  display: flex;
  width: 100%;
  margin: 1rem 0;
  padding-right: 1rem;
  color: ${props => (props.active ? 'var(--pink)' : 'var(--gray)')};
  font-weight: bold;
  align-items: center;
  font-size: 1rem;
  transition: 0.5s;

  div {
    display: flex;
  }

  img {
    margin-right: 1rem;
    width: 2rem;
    transition: 0.5s;
    filter: ${props => (props.active ? 'none' : 'grayscale(100%)')};
  }
`;
