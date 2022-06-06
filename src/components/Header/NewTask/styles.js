import styled from 'styled-components';
import Select from 'react-select';

export const NewTaskWrapper = styled.div`
  background: var(--blueDark);
  width: 100%;
  height: 100%;
  display: flex;
  margin-left: 1rem;
  border-radius: 0.5rem;
  padding: 0 5px;
  border-right: 0;

  > input {
    border-right-width: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  > button {
    border-radius: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background: var(--pink);
    width: 5rem;
    height: 2.375rem;
    background: var(--purple);
  }
`;

export const CustomSelect = styled(Select)`
  border-top: 3px solid var(--purple);
  border-bottom: 3px solid var(--purple);
  width: 30%;

  div {
    padding: 0.05rem;
  }

  div.option {
    display: flex;
    align-items: center;
    /* background: var(--black); */
    width: 100%;
    transition: 0.2s;

    span {
      color: var(--black)
    }
  }

  &:hover, &:focus {
    border-color: var(--pink); 
  }

  img {
    width: 1.5rem;
    margin-right: 0.5rem;
  }
`;
