import styled from "styled-components";

export const PostCardsContainer = styled.div`
  max-width: 54rem;
  width: 100%;


  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 8rem;
`

export const CardContainer =styled.a`
  padding: 2rem;
  
  background-color: ${props => props.theme['base-post']};
  display: flex;
  flex-direction: column;

  max-width: 26rem;
  width: 100%;
  position: relative;
  text-decoration: none;
  border-radius: 10px;

  :hover {
    border: 2px solid ${props => props.theme['base-label']};
    
  }

  .title {
    max-width: 14rem;
    margin-bottom: -2rem;

    h3 {
      color: ${props => props.theme['base-title']};
    }
  }
  
  .title span {
    position: absolute;
    right: 2rem;
    color: ${props => props.theme['base-span']};
  }

  .content p{
    max-width: 22rem;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
            line-clamp: 4;
    -webkit-box-orient: vertical ;
    color: ${props => props.theme['base-text']};
  }
`