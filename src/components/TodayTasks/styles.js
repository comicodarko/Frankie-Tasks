import styled from 'styled-components';
import { RowBetween } from '../Defaults';

export const TodayTasksWrapper = styled.section`
  padding: 1rem;
  margin: 1rem;
  flex: 1;
  border-radius: 1.5rem;
  background: var(--blueDark);
  display: flex;
  flex-direction: column;
  overflow-y: hidden;

  h2 {
    margin-bottom: 0.5rem;
  }

  .moreIcon {
    transition: 0.5s;
    border-radius: 100%;
  }

  .moreIcon:hover {
    fill: var(--pink);
  }

  main {
    height: 100%;
    overflow-y: auto;
  }
`;

export const TodayTaskHeader = styled(RowBetween)`
  padding-right: 1rem;
  height: 4.3rem;
`;
