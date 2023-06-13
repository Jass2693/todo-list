import { styled } from "styled-components";

export const ModeButton = styled.button`
background: ${({theme})=> theme.hover};
width: 30px;
height: 30px;
border-radius: 48%;
position: absolute;
top: 4px;
left: ${({mode}) => (mode ? "7px" : "37px")};
transition: 1s;`

