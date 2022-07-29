import styled from "styled-components";

export const CategoriesWrapper = styled.nav`
  /* background: var(--blueDark); */
  border-top: 2px solid var(--pink);
  padding-top: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1rem;
  min-height: 5rem;
  overflow-y: auto;
`

export const MenuCategory = styled.button`
  display: flex;
  align-items: center;
  padding: 0.25rem 0;
  color: ${props => props.active ? 'var(--pink)' : 'var(--black)'};
  font-weight: bold;
  
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