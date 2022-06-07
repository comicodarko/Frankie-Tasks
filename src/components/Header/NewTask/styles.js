import styled from 'styled-components';
import Select from 'react-select';

export const NewTaskWrapper = styled.div`
  background: var(--blueDark);
  width: 100%;
  height: 100%;
  display: flex;
  margin-left: 1rem;
  border-radius: 0.5rem;
  padding: 10px;
  
  > input {
    border-right-width: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 3px solid var(--purple);
    flex: 1;

    &:hover, &:focus{
      border-color: var(--purple);
    }
  }

  > button {
    border-radius: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background: var(--pink);
    width: 5rem;
    min-height: 2.375rem;
    border: 3px solid var(--purple);
    border-left: 0;
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
    width: 100%;
    transition: 0.2s;
    cursor: pointer;

    span {
      color: var(--black);
    }
  }

  img {
    width: 1.5rem;
    margin-right: 0.5rem;
  }
`;
