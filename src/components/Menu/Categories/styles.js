import styled from "styled-components";

export const CategoriesWrapper = styled.nav`
  margin-top: auto;
  background: var(--blueDark);
  padding: 0 0.5rem;
  margin-bottom: 1.5rem;
  max-height: 35%;
  display: flex;
  border-radius: 0.5rem;
  flex-direction: column;
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