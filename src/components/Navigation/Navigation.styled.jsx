import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
display:inline-block;
margin: 15px;
font-size: 18px;
color: #000000;
text-transform: uppercase;
&.active{
    color: #FF0000;
}
`