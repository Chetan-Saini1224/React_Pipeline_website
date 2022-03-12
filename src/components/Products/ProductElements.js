import styled from "styled-components";

export const ProductContainer=styled.div`
height:800px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:#FF970D;

@media screen and (max-width: 760px)
{
    height:1100px;
}

@media screen and (max-width: 480px)
{
    height:1300px;
}
`
export const ProductWrapper=styled.div`
max-width:1000px;
margin:0 auto;
display: grid;
grid-template-columns:1fr 1fr 1fr;
grid-gap:16px;
padding:0 50px;


@media screen and (max-width:1000px)
{
grid-template-columns:1fr 1fr;    
}

@media screen and (max-width:760px)
{
 grid-template-columns:1fr;
 padding:0 20px;
    
} 


`

export const ProductCard=styled.div`
background:#fff;
display:flex;
flex-direction:column;
align-items:center;
border-radius:10px;
max-height:340px;
padding:30px;
box-shadow:0 1px 3px rgba(0,0,0,0.5);
trasition: all 0.2s ease-in-out;

&:hover
{
    transition:all 0.3s ease-in-out;
    cursor: pointer;
    transform: scale(1.02);
}


`

export const ProductIcon=styled.img`
height:160px;
width:160px;
margin-bottom:10px;
`
export const ProductH1=styled.h1`
fonst-size: 2.5rem;
color:#fff;
margin-bottom:64px;

@media screen and (max-width:480px)
{
font-size:2rem;
}

` 
export const ProductH2=styled.h1`
font-size:1rem;
margin-bottom:10px;
`

export const ProductP=styled.p`
font-size:1rem;
text-align:center;
`


















