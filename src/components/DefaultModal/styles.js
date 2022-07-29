import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid var(--pink);
  background: var(--black);
  padding: 1rem;
  border-radius: 1rem;

  @media(max-width: 450px) { border-radius: 0 };
  @media(max-width: 400px) { padding: 1rem 0.5rem };
`