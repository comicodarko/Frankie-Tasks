import styled from "styled-components";

export const CategoriesWrapper = styled.nav`
  background: var(--blueDark);
  padding: 0.25rem 0.5rem;
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;
  flex-direction: column;
  margin-bottom: 1rem;
  min-height: 5rem;
  overflow-y: auto;
`

export const MenuCategory = styled.button`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0.25rem 0;
    color: ${props => props.active ? 'var(--pink)' : 'var(--white)'};
    
    img {
      margin-right: 1rem;
      width: 2rem;
    }

    &:hover {
      color: ${props => props.active ? 'var(--pink)' : 'var(--purple)'};
    }
`

export const CategoriesEmpty = styled.span`
  cursor: pointer;
  text-align: center;
  color: var(--purple);
  margin: 1rem 0;
`