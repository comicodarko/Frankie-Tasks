import styled from 'styled-components';
import { RowBetween } from '../Defaults';

export const TodayTasksBody = styled.section`
  .moreIcon {
    transition: 0.5s;
    border-radius: 100%;
  }

  .moreIcon:hover {
    fill: var(--pink);
  }

  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const TodayTaskHeader = styled(RowBetween)`
  padding-right: 1rem;
  height: 4.3rem;

  h2 {
    margin-bottom: 0.5rem;
  }
`;
