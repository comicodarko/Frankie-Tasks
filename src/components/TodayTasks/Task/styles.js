import styled from 'styled-components';

export const TaskWrapper = styled.span`
  display: flex;
  padding: 0.5rem 0;
  /* justify-content: space-between; */
  align-items: center;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background-color: var(--black);
  }

  &:not(:last-child) {
    border-bottom: 2px solid var(--black);
  }

  > div {
    display: flex;
    align-items: center;

    h3 {
      font-size: 1rem;
      color: ${props => (props.checked ? 'var(--gray)' : 'var(--white)')};
      text-decoration: ${props =>
        props.checked ? 'line-through var(--gray) 3px' : 'none'};
    }

    h4 {
      margin-top: 0.2rem;
      margin-left: 0.5rem;
      font-size: 0.7rem;
      color: ${props => (props.checked ? 'var(--gray)' : 'var(--pink)')};
    
      &:hover {
        text-decoration: underline;
      }
    }

    > img {
      padding: 0.5rem;
      border: 2px solid var(--black);
      border-radius: 1rem;
      margin-right: 0.5rem;
      width: 50px;
      height: 50px;
      filter: ${props => (props.checked ? 'grayscale(100%)' : 'none')};
    }
  }

  > div.infos {
    margin-right: auto;
  }

  > div.dates {
    flex-direction: column;
    margin-right: 1rem;
    font-size: 0.8rem;
    font-weight: 600;

    span {
      color: var(--blue);
      &:last-child {
        color: var(--pink);
      }
    }
  }
`;
