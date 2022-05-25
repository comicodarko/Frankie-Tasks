import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;

  h1 {
    font-size: 2rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button.notifications {
    background: var(--blueDark);
    border-radius: 100%;
    margin-left: 1rem;
    display: flex;
    position: relative;
    width: 35px;
    height: 35px;

    svg {
      position: absolute;
      top: -5px;
      left: -5px;
      fill: var(--blue);
    }
  }
`;
