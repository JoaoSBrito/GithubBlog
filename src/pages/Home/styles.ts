import styled from "styled-components";

export const HomeContainer = styled.div`
  margin-top: -6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4,5rem;
  width: 100vw;
  overflow-x: hidden;

  .content { 
    margin-top: 4.5rem;
    width: 54rem;
    max-width: 54rem;

    display: flex;
    flex-direction: column;

    .title {
      display: flex;
      justify-content: space-between;

      p {
        color: ${props => props.theme['base-span']};
      }
    }
  }
`
