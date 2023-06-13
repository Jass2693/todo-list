import { styled } from "styled-components";

export const Main = styled.main`
background-color: ${({theme}) => theme.bgc};
color: ${({theme}) => theme.text};
border: 1px solid ${({theme})=> theme.text};
width: fit-content;
padding: 30px;
min-height: 600px;
border-radius: 10px;

 `