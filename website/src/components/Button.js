import styled from "styled-components";

export const Button = styled.button`
background: ${props => props.primary ? "palevioletred" : "white"};
color: ${props => props.primary ? "white" : "palevioletred"};
margin: 0.5em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
&:hover{
    background: ${props => props.primary ? "palevioletred" : "palevioletred"};
    color: ${props => props.primary ?  "white": "white"};

  };
  &.active{
    background: ${props => props.primary ? "palevioletred" : "palevioletred"};
    color: ${props => props.primary ?  "white": "white"};
  }
`;