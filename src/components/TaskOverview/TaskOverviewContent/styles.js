import styled from 'styled-components';

export const TaskOverviewWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: var(--purple);
  padding: 1rem;
  border-radius: 1.5rem;
  margin: 1rem;

  section {
    display: flex;
    align-items: center;

    > span {
      padding: 0.5rem;
      border: 2px solid var(--gray);
      border-radius: 1rem;
      margin-right: 1rem;

      svg {
        fill: var(--red);
      }
    }

    span.type {
      color: var(--red);
      font-weight: bold;
      font-size: 0.8rem;
      line-height: 0.3rem;
    }
  }
`;
