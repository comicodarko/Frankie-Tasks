import styled from 'styled-components';
import Select from 'react-select';
import { Button, RowBetween } from '../../Defaults';

export const NewTaskWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 0.5rem;
  
  > input {
    margin-bottom: 1rem;
    border-right-width: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 3px solid var(--purple);
    flex: 1;

    &:hover, &:focus{
      border-color: var(--purple);
    }
  }
`;

export const CustomSelect = styled(Select)`
  border: 3px solid var(--purple);
  border-left: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-bottom: 1rem;
  min-width: 7rem;
  flex: 1;
  
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

    @media(max-width: 700px) {
      margin-right: 0.2rem;
    }
  }
`;

export const NewTaskButton = styled(Button)`
  display: flex;
  margin-left: auto;
  margin-top: 1rem;
`

export const NewTaskDates = styled(RowBetween)`
  display: ${props => props.show ? 'flex' : 'none'};
  margin-top: 1rem;
`