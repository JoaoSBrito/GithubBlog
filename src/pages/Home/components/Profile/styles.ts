import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: ${props => props.theme['base-profile']};
  
  border-radius: 10px;

  padding: 2rem;
  max-width: 54rem;
  width: 100%;

  display: flex;
  align-self: center;
  /* justify-content: center; */
  text-align: left;
  gap: 2rem;
  position: relative;

  .avatar {
    img {
      border-radius: 8px;
      width: 9.25rem;
      height: 9.25rem;
    }
  }

  .link {
    position: absolute;
    right: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    font-size: .75rem;
    font-weight: bold;

    color: ${props => props.theme['blue']};

    :hover {
      border-bottom: 1px solid ${props => props.theme['blue']};
    }

  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

 h1 {
  margin-bottom: .5rem;
  font-size: 1.5rem;
 }

 .userInfos {
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  /* text-align: center; */
  align-items: center;
 }

 .userInfo {
  display: flex;
  align-items: center;
  gap: .5rem;

  text-decoration: none;
  color:${props => props.theme['base-subtitle']};
 }
`