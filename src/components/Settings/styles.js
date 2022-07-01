import styled from "styled-components";
import { DefaultWrapper } from "../Defaults";

export const ConfigWrapper = styled(DefaultWrapper)`
  align-items: center;
  flex-wrap: wrap;
`

export const ConfigCategory = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;

  @media(max-width: 800px) { width: 48%;}
  @media(max-width: 550px) { width: 90%;}

  header {
    display: flex;
    margin-bottom: 1rem;
    
    div.title {
      align-items: center;
      display: flex;
      width: 100%;
    }
    
    h3 {
      border-bottom: 2px solid var(--pink);
      padding-bottom: 2px;
      margin-right: auto;
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
      margin-bottom: 0.5rem;
      padding-left: 0.5rem;
      
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