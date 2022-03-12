import React from 'react'
import { Button } from '../ButtonElement';
import { InfoContainer,
         InfoWrapper,
         TopLine,
         Heading,
         BtnWrap,
         Img,
         ImgWrap,
         Subtitle,
         Coloumn1,
         Coloumn2,
         InfoRow,
        TextWrapper     } from './InfoElements'
import pipe from "../../images/lpg1.jpg";

const InfoSection = ({...homeobj}) => {
    return (
        <>
            <InfoContainer lightBg={homeobj.lightBg} id={homeobj.id}>
                  <InfoWrapper>
                      <InfoRow imgStart={homeobj.imgStart} >
                          <Coloumn1>
                              <TextWrapper>
                                  <TopLine>{homeobj.topLine}</TopLine>
                                  <Heading lightText={homeobj.lightText}>{homeobj.headline}</Heading>
                                  <Subtitle darkText={homeobj.darkText}>{homeobj.description}</Subtitle>
                                  <BtnWrap>
                                      <Button to="home"
                                       primary={homeobj.primary}
                                       duration={500}
                                       spy={true}
                                       exact={true}
                                       offset={-80}
                                       dark={homeobj.dark}
                                       dark2={homeobj.dark}
                                       >{homeobj.buttonLabel}</Button>
                                  </BtnWrap> 
                              </TextWrapper>
                          </Coloumn1>
                          <Coloumn2>
                              <ImgWrap>
                                  <Img src={pipe} alt={homeobj.alt} />
                              </ImgWrap>
                          </Coloumn2>
                      </InfoRow>
                  </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
