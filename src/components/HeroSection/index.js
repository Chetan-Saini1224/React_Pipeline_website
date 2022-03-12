import React, { useState } from 'react';
import anime from '../../Background/anime.png';
import { HeroBG,
         HeroContainer,
         ImageBG,
         HeroH1,
         HeroP,
         HeroBtnWrapper,
         ArrowForward,
         ArrowRight,
        HeroContent    } from './HeroElements';


import  { Button } from "../ButtonElement";

const HeroSection = () => {

const [hover,setHover] =useState(false);

const OnHover = ()=>
{
    setHover(!hover);
}

    return (
        <HeroContainer>
            <HeroBG>
                <ImageBG src={anime} />
            </HeroBG> 
            <HeroContent>
                <HeroH1>Aero-Tech</HeroH1>
                <HeroP>
                    Provide  The  Quality  
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={OnHover} onMouseLeave={OnHover}
                     primary="true"
                     dark="true"
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
