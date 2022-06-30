import styled from 'styled-components';
import Select from 'react-select';

export const NewTaskWrapper = styled.div`
  background: var(--blueDark);
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 0.5rem;
  padding: 10px;
  z-index: 1;

  @media(max-width: 700px) {
    margin-left: 0;
  }
  
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

  > button.add {
    border-radius: 5px;
    border-top-left-radius: 0;
    border: 2px solid var(--purple);
    border-left: 0;
    border-bottom-left-radius: 0;
    background: var(--purple);
    margin-left: 0px;
    transition: 0.5s;

    &:hover {
      background: var(--pink);
    }

    @media(max-width: 700px) {
      width: 3rem;
    }
  }
`;

export const CustomSelect = styled(Select)`
  border-top: 3px solid var(--purple);
  border-bottom: 3px solid var(--purple);
  width: 30%;

  @media(max-width: 700px) {
    width: 35%
  }

  div {
    cursor: pointer;
    padding: 0.05rem;
  }

  div.option {
    display: flex;
    align-items: center;
    justify-content: center;
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

    @media(max-width: 700px) {
      margin-right: 0.2rem;
    }
  }
`;
