/* global tw */
import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import { Parallax, ParallaxLayer } from 'react-spring';
import 'typeface-cantata-one';
import 'typeface-open-sans';

import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import '../styles/global';

import triangle from '../../static/images/triangle.svg';
import BannerImage from '../../static/images/HackArizona-Banner-Transparent-2020.png'
import MLHLogo from '../../static/images/mlh-logo-white.svg'

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
  display: flex;
  flex-direction: row;
  padding-top: 25vh;
  margin-bottom: 200px;
  @media screen and (max-width: 500px) and (max-height: 800px){
    padding-top: 5vh;
  }

  @media screen and (max-width: 800px) and (max-height: 500px){
    margin-bottom: 100px;
  }

  @media screen and (max-width: 1000px){
    flex-direction: column;
  }
`;

const HeroContent = styled.div`
  margin: auto;
  margin-left: 10vw;
  @media screen and (max-width: 500px){
    margin-left: 0vw;
  }
`;

const HeroImage = styled.img`
  height: 85vh;
  width: 20vw:
  margin-top: 15vh;
  @media screen and (max-width: 500px){
    display: block;
    margin-top: 25vh;
    margin-left: 20px;
    margin-right: auto;
    height: 25vh;
    width: 25vw;
  }
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
  @media screen and (max-width: 800px) and (max-height: 500px){
    margin-top: 50px;
  }
`;

const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  font-family: "arial black";
`;

const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-sans text-white mb-8 tracking-wide relative inline-block md:pt-6')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
    font-family: "arial";
  }
`;

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const RegistrationCTA = styled.a`
  ${tw('text-2xl lg:text-4xl font-sans mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  color: #e09638; /* this year's orange */
  cursor: pointer;
  z-index: 10;
`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
  @media screen and (max-width: 800px) and (max-height: 500px){
    margin-top: 100px;
  }
`;

const AboutSub = styled.span`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
  @media screen and (max-width: 800px) and (max-height: 500px){
    margin-top: 100px;
  }
`;

const AboutDesc = styled.p`
  ${tw('text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-6')};
  @media screen and (max-width: 800px) and (max-height: 500px){
    margin-top: 100px;
  }
`;

const ApplyLink = styled.span`
  text-align: center;
`

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 800px) and (max-height: 500px){
    margin-top: 00px;
  }
`;

const MLHFooter = styled.p`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
  margin-top: 30vh;
  margin-bottom: 70px;
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  margin-top: 100px;
  a {
    color: #e07628;
    text-decoration: none;
    
  }
  
  @media screen and (max-width: 500px) and (max-height: 800px){
    margin-top: 200px;
  }
`;

const PreRegLink = 'https://list.arizona.edu/sympa/subscribe/hackaz'

const Index = () => (
  <React.Fragment>
    <SEO/>
    <a
      id="mlh-trust-badge" 
      style={{display: 'block', maxWidth: 100 + 'px', minWidth: 60 + 'px', position: 'fixed', right: 50 + 'px', top: 0, width: 10 + '%', zIndex: 10000}}
      href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=red" 
      target="_blank">
      <img src={"https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-red.svg"} alt="Major League Hacking 2020 Hackathon Season" style={{width:100 + '%'}}/>
    </a>
    <Parallax pages={5}>
      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG icon="triangle" className={hidden} width={48} stroke={colors['orange-darkest']} left="10%" top="20%" />
          <SVG icon="hexa" width={48} stroke={colors['orange-darkest']} left="60%" top="70%" />
          <SVG icon="box" width={6} fill={colors['orange-darker']} left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors['red-darker']} left="80%" top="10%" />
          <SVG icon="triangle" width={12} stroke={colors['red-light']} left="90%" top="50%" />
          <SVG icon="circle" width={16} fill={colors['orange-dark']} left="70%" top="90%" />
          <SVG icon="triangle" width={16} stroke={colors['red']} left="30%" top="65%" />
          <SVG icon="circle" width={6} fill={colors['orange-darkest']} left="75%" top="10%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['orange-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" className={hidden} width={24} fill={colors['pink-light']} left="5%" top="70%" />
        <SVG icon="circle" width={6} fill={colors['red']} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['red-darkest']} left="50%" top="60%" />
        <SVG icon="upDown" width={8} fill={colors['pink-light']} left="95%" top="90%" />
        <SVG icon="upDown" className={hidden} width={24} fill={colors['orange-darker']} left="40%" top="80%" />
        <SVG icon="triangle" width={8} stroke={colors['red-light']} left="25%" top="5%" />
        <SVG icon="circle" width={64} fill={colors['orange-darkest']} left="95%" top="5%" />
        <SVG icon="box" className={hidden} width={64} fill={colors['orange-dark']} left="5%" top="90%" />
        <SVG icon="box" width={6} fill={colors['orange-darkest']} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors['pink-darker']} left="40%" top="30%" />
        <SVG icon="hexa" width={16} stroke={colors['orange']} left="10%" top="50%" />
        <SVG icon="hexa" width={8} stroke={colors['orange-dark']} left="80%" top="70%" />
      </Divider>
      <Content speed={0.4} offset={0}>
        <Hero>
        <HeroImage src={BannerImage}/>
          <HeroContent>
            <BigTitle>
              Hack Arizona
            </BigTitle>
            <Subtitle> 
              1,000+ attendees <br/>
              Jan. 17-19, 2020<br/>
              University of Arizona <br/>
              Albert B. Weaver Science and Engineering Library
            </Subtitle>
            <RegistrationCTA target="_blank" href={PreRegLink}>
              Pre-Register Now!
            </RegistrationCTA>
          </HeroContent>
          
        </Hero>
      </Content>
      <DividerMiddle
        bg="linear-gradient(to right, OrangeRed 0%, #ff99cc 60%, #c33c3c 80%)"
        speed={-0.2}
        offset={1.1}
        factor={2}
      />
      <Content speed={0.4} offset={1.2} factor={2}>
        <Inner>
          <Title>This year's challenge categories will be announced during the Fall Semester!</Title>
          <Subtitle>Some topics from last year include:</Subtitle>
          <ProjectsWrapper>
            <ProjectCard title="Social Good">
              Hack that could contribute the most social good
            </ProjectCard>
            <ProjectCard title="Blockchain / DLT">
              Best Dapp, blockchain, or distributed ledger project
            </ProjectCard>
            <ProjectCard title="Artificial Intelligence">
              Best overall hack involving artificial intelligence
            </ProjectCard>
            <ProjectCard title="AR / VR">
              Most interesting implementation of artificial or virtual reality
            </ProjectCard>
            <ProjectCard title="Cybersecurity">
              Most surprising cybersecurity project
            </ProjectCard>
            <ProjectCard title="Hardware/robotics">
              Best use of hardware.<br/> We like self driving things, in particular!
            </ProjectCard>
          </ProjectsWrapper>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={1} factor={2}>
        <UpDown>
          <SVG icon="box" width={6} fill={colors['black']} left="85%" top="75%" />
          <SVG icon="upDown" width={8} fill={colors.orange} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors.orange} left="25%" top="5%" />
          <SVG icon="circle" className={hidden} width={24} fill={colors.orange} left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors.orange} left="20%" top="90%" />
          <SVG icon="triangle" width={12} stroke={colors['orange-dark']} left="90%" top="30%" />
          <SVG icon="circle" width={16} fill={colors.orange} left="70%" top="90%" />
          <SVG icon="triangle" className={hidden} width={16} stroke={colors['orange-dark']} left="18%" top="75%" />
          <SVG icon="circle" width={6} fill={colors['red-light']} left="75%" top="10%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors.orange} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors['orange-dark']} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['orange-dark']} left="80%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors['orange-dark']} left="29%" top="26%" />
        <SVG icon="hexa" width={16} stroke={colors['orange-dark']} left="75%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['orange-dark']} left="80%" top="70%" />
      </Divider>
      <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={3} />
      <Divider speed={0.1} offset={3}>
        <UpDown>
          <SVG icon="box" className={hidden} width={6} fill={colors['orange-darker']} left="50%" top="75%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['orange-dark']} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors['orange-darker']} left="25%" top="5%" />
          <SVG icon="upDown" className={hidden} width={24} fill={colors.orange} left="80%" top="80%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors['orange-dark']} left="5%" top="80%" />
          <SVG icon="triangle" width={12} stroke={colors['red-light']} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors['red-light']} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['pink']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors['red-light']} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['orange-dark']} left="70%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors['orange']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['white']} left="80%" top="70%" />
      </Divider>
      <Content speed={0.4} offset={3}>
        <Inner>
          <Title id="about">About Hack Arizona</Title>
          <AboutHero>
            <AboutSub>
              Hack Arizona is a free 36 hour collegiate hackathon where teams of up to four compete to win prizes; all while attending fun activities and lots of educational sessions.
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            Hack Arizona 2020 runs January 17-19th. 
            The event is free and we provide you with free snacks and meals, swag, hardware to hack on, and prizes you can win throughout the weekend. 
          </AboutDesc>
          <br/>
          {/* <RegistrationCTA target="_blank" href={RegLink}>Apply for Hack Arizona 2020 now!</RegistrationCTA> */}
        </Inner>
      </Content>
      <Divider fill="#23262b" speed={0.2} offset={4}>
        <WaveWrapper>
          <InnerWave>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
              <path className={waveAnimation}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>
      </Divider>
      <Content speed={0.4} offset={4}>
        <Inner>
          <Title id="sponsor">Contact us</Title>
          <ContactText>
            Email us at <a href="mailto:team@hackarizona.org">team@hackarizona.org</a> with any general questions or to learn about our 2020 sponsorship packages.<br/><br/>
            Be sure to check out our event on: {' '}
            <a href="https://twitter.com/hack_arizona">Twitter</a>,  {' '}
            <a href="https://www.youtube.com/channel/UC94vU02OOICGg9FyR_6NSpA">Youtube</a>, or {' '}
            <a href="https://www.facebook.com/hackarizona/">Facebook.</a>
          </ContactText>
        </Inner>
        <Footer>
          <MLHFooter>
            <img src={MLHLogo} style={{width: 90 + '%', height: 90 + '%', justifyContent: 'center', alignItems: 'center'}}/>
            <p><a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"> MLH Code of Conduct</a></p>
          </MLHFooter>
          <p>© Hack Arizona, Inc. 2015-2019</p>
          <p><a href="https://github.com/hackarizona/hackarizona.org"> Open sourced</a></p>
        </Footer>
      </Content>
      
      <Divider speed={0.1} offset={4}>
        <UpDown>
          <SVG icon="upDown" className={hidden} width={8} fill={colors['orange-dark']} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors['orange']} left="25%" top="5%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="triangle" width={12} stroke={colors['red-light']} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors['orange']} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['red-darker']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors['orange']} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['orange-dark']} left="70%" top="60%" />
        <SVG icon="box" width={12} fill={colors.orange} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['red']} left="80%" top="70%" />
      </Divider>
    </Parallax>
  </React.Fragment>  
);

export default Index;
