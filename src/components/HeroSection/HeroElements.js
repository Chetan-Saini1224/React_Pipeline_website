import styled from "styled-components";
import {MdArrowForward ,MdKeyboardArrowRight} from "react-icons/md";


export const HeroContainer=styled.div`
background:#fff;
display:flex;
justify-content:center;
align-items:center;
padding: 0 30px;
height:800px;
z-index:1;

`


export const HeroBG= styled.div`
width:100%;
height:100%;
`



export const ImageBG =styled.img`
width:100%;
height:100%;
object-fit:cover;
`



export const HeroContent =styled.div`
z-index: 3;
max-width: 1200px;
position:absolute;
padding:8px 24px;
display: flex;
flex-direction: column;
`


export const HeroH1 =styled.h1`
color:#FF970D;
font-size:48px;
text-align:center;

@media screen and (max-width:768px)
{
    font-size:40px;
}

`



export const HeroP =styled.p`
margin-top:34px;
color:#fff;
font-size:24px;
text-align:center;

@media screen and (max-width:768px)
{
    font-size: 20px;
}

`


export const HeroBtnWrapper =styled.div`
margin-top:32px;
display:flex;
flex-direction:column;
align-items:center;
`


export const ArrowForward = styled(MdArrowForward)`
margin-left:8px;
font-size:20px;
`


export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left:8px;
font-size:20px;
`

