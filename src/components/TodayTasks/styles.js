import styled from 'styled-components';

export const TodayTasksWrapper = styled.section`
  padding: 1rem;
  margin: 1rem;
  border-radius: 1.5rem;
  background: var(--blueDark);
  height: 100%;
  overflow-y: auto;

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
`;
