import styled from "styled-components";

export const SearchFormContainer = styled.form`
  input {
    width: 100%;
    color: ${props => props.theme['base-text']};
    background-color: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-border']};
    border-radius: 6px;
    padding: 1rem;
    margin-top: .75rem; 
    outline: none;

    &::placeholder {
      color: ${props => props.theme['base-label']}
    }

    &:focus {
      border: 1px solid ${props => props.theme['blue']};
    }
  }
  
`