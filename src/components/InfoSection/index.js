import React from 'react'
import { Button } from '../Button'
import { InfoContainer, InfoWrapper, 
        InfoRow, Column1, Column2, ImgWrap, Img, TextWrapper, 
        TopLine, Heading, Subtitle, BtnWrap } from './InfoElements'

const InfoSection = ( { id, dark, dark2,primary,lightBg, lightText, imgStart, topLine, headline, darkText, img, alt, buttonLabel, description,  } ) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darktext={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to="home" 
                                        smooth duration={500} spy exact="true"
                                        offset={-80}
                                        dark={dark ? 1 : 0 }
                                        dark2={dark2 ? 1 : 0 }
                                        primary={primary ? 1 : 0 }>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
