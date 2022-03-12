import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import {Link as LinkR} from "react-router-dom";


export const SidebarContainer = styled.aside`
position:fixed;
z-index:99;
width:100%;
height:100%;
background:white;
display:grid;
align-item:center;
left:0;
transition:0.3s ease-in-out;
opacity: ${({isopen })=> (isopen ? '100%' : '0')};
top: ${({ isopen })=> (isopen ? '0': '-100%')};
`
export const CloseIcon =styled(FaTimes)`
color:#FF970D;
`
export const Icon=styled.div`
position:absolute;
top:1.6rem;
right:2rem;
font-size:2.1rem;
cursor:pointer;
outline:none;
`


export const SidebarWrapper=styled.div`
color:#fff;
padding-top:7rem;
`

export const SidebarLink=styled(LinkS)`
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
transition:0.2 ease-in-out;
color:black;
cursor:pointer;


&:hover
{
    color:#FF970D;
    transition:0.2 ease-in-out;
}

`

export const SideBtnWrap=styled.div`
display:flex;
justify-content:center;

`
export const SidebarBtn =styled(LinkR)`
    border-radius:50px;
    background:#FF970D;
    white-space:nonwrap;
    padding:16px 64px;
    color:white;
    font-size:1rem;
    outline:none;
    border:none;
    cursor:pointer;
    transition: all 0.2 ease-in-out;
    text-decoration:none;

    &:hover
    {
        transition: all 0.5s ease-in-out;
        background:#fff;
        color:#FF970D;
        border:2px solid #FF970D; 
    }

`

export const SidebarMenu =styled.ul`
display:grid;
grid-template-coloums:1fr;
grid-template-rows:repeat(6,80px);
text-align:center;

@media screen and (max-width:480px)
{
    grid-template-rows:repeat(6,60px);
}

` 






