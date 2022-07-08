import styled from "styled-components";
import { DefaultWrapper } from "../Defaults";

export const ConfigWrapper = styled(DefaultWrapper)`
  align-items: center;
  flex-wrap: wrap;

  > div {
    display: flex;
    width: calc(100% - 1rem);
    flex-direction: column;

    &:not(:last-child) {
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      border-bottom: 2px solid var(--black);
    }

    h3 {
      border-bottom: 2px solid var(--pink);
      padding-bottom: 2px;
      margin-right: auto;
    }
  }
`
