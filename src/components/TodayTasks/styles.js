import styled from 'styled-components';
import { RowBetween } from '../Defaults';

export const TodayTasksBody = styled.section`
  overflow-x: hidden;
`;

export const TodayTaskHeader = styled(RowBetween)`
  flex-wrap: wrap;
  
  h2 {
    margin-right: auto;
    margin-bottom: 0.5rem;
  }
`;
