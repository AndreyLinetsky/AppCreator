import styled from 'styled-components'

export const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  width: 800px;
  margin: 20px;
  padding: 30px;
  border: 1px solid lightblue;
`

export const fieldStyle = `
  padding: 7px 8px;
  font-family: inherit;
  font-size: 12px;
  border-width: 1px;
  background-color: lightgrey;
`;


export const inputStyle = `
  padding: 7px 8px;
  margin: 5px 0px;
  font-family: inherit;
  font-size: 12px;
  border-width: 1px;
  :required {
    box-shadow: none;
  }
  ::placeholder {
    opacity: 0.5;
  }
`;

export const StyledErrorField = styled.div`
  color: red;
  font-size: 13px;
  margin-bottom: 5px;
`;