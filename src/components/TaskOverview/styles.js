import styled from "styled-components";
import { RowBetween } from "../Defaults";

export const TaskOverviewContainer = styled(RowBetween)`
  @media(max-width: 700px) {
    flex-wrap: wrap;

    > div {
      margin-top: 0;
      padding: 0.5rem;
    }
  }
`