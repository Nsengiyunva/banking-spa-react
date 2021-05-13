import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, 
    HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../Button'

function HeroSection() {
    const [ hover, setHover ] = useState( false )

    const onHover = () => setHover( !hover )

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} 
                    type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign Up for a new Account and receive $250 in credit towards to next payment
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" 
                        primary dark
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}>
                        Get Started{ hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
