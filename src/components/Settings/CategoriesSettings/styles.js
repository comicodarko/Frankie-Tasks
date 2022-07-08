import styled from "styled-components";

export const ConfigCategory = styled.div`
  header {
    display: flex;
    margin-bottom: 1rem;
    
    div.title {
      align-items: center;
      display: flex;
      width: 100%;
    }

    button {
      padding: 0.25rem;
      padding-bottom: 0.15rem;
      margin-left: 1rem;
      
      svg {
        margin-right: 0;
      }
    }
  }

  div.content {
    span {
      display: flex;
      align-items: center;
      border-left: 2px solid var(--pink);
      margin-bottom: 0.25rem;
      padding: 0 0.5rem;
      transition: 0.25s;

      &:hover {
        background: var(--black);
        padding: 0.25rem 0.5rem;
      }

      img {
        width: 1.5rem;
        height: 1.5rem;
      }

      > img {
        margin-right: 1rem;
      }
      
      p {
        margin-right: auto;
        font-size: 1rem;
      }
    }
    button {
      &:not(:last-child) {
        margin-right: 1rem;
      
      }
    }
  }
`