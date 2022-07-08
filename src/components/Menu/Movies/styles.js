import styled from "styled-components";

export const MoviesWrapper = styled.ul`
  overflow-y: auto;
  font-size: 0.75rem;
  border-top: 2px solid var(--pink);
  max-height: 40%;
  a {
    display: flex;
    align-items: center;
    list-style-type: none;
    font-weight: bold;
    margin-top: 0.5rem;

    img {
      width: 2.5rem;
      border-radius: 2px;
      margin-right: 0.5rem;
      border: 1px solid var(--purple);
    }

    div {
      display: flex;
      flex-direction: column;
      span.title {
        max-width: 9rem;
        color: var(--black);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      span.rate {
        color: var(--pink);
        font-size: 1rem;
      }
    }
  }
`