import styled from 'styled-components';

export const TaskOverviewWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: var(--blueDark);
  padding: 1rem;
  border-radius: 1.5rem;
  margin: 1rem;
  cursor: pointer;

  section {
    display: flex;
    align-items: center;

    > span {
      padding: 0.5rem;
      border: 2px solid var(--black);
      border-radius: 1rem;
      margin-right: 1rem;

      svg {
        fill: var(--pink);
      }
    }

    span.type {
      color: var(--pink);
      font-weight: bold;
      font-size: 0.8rem;
      display: flex;
      margin-top: -3px;
    }
  }

  section.progress {
    width: 3.5rem;

    span {
      font-weight: bold;
      font-size: 0.9rem;
    }
  }
`;
