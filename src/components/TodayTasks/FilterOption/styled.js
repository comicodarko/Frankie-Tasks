import styled from 'styled-components';

export const FilterOptionWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1rem 0;

  div {
    margin-right: -1rem;
    margin-left: 2rem;
    
    @media(max-width: 700px) {
      margin-right: 0;
      margin-left: 5px;
    }
  }
`;
