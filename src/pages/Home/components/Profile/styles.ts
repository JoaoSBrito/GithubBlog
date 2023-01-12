import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: ${props => props.theme['base-profile']};
  
  border-radius: 10px;

  padding: 2rem;
  max-width: 54rem;

  display: flex;
  align-self: center;
  justify-content: center;
  text-align: left;
  gap: 2rem;
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

 h1 {
  margin-bottom: .5rem;
 }

 .userInfos {
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  text-align: center;
  align-items: center;
 }

 .userInfo {
  display: flex;
  align-items: center;
  gap: .5rem;
 }
`