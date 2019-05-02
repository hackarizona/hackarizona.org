import React from 'react'
import styled from 'styled-components'

import SpeakerImage from '../assets/Ian_Tracey_Headshot.jpeg'

const Container = styled.div`
  color: white;
  min-height: 60vh;
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 80vw;

  @media screen and (max-width: 900px) {
    height: auto;
    width: auto;
    flex-direction: column;
  }

  @media screen and (min-width: 1300px){
    width: 60vw;
  }
`

const SpeakerImageContainer = styled.div`
  flex: 1;

  & > img { 
    max-width: 350px;
  }

  @media screen and (max-width: 900px){
    & > img { 
      max-width: 100%;
    }
  }
`

const SpeakerBioContainer = styled.div`
  flex: 1;
  height: 100%;
`

const Name = styled.h1`
  color: white;
  text-align: center;
  margin: 120px 0 22px 0;

  @media screen and (max-width: 900px){
    margin: 44px 0 22px 0;
  }
`

const Title = styled.h3`
  color: white;
  text-align: center;
  margin: 0 0 8px 0;
`

const Company = styled.h3`
  color: white;
  text-align: center;
  margin: 0;

  @media screen and (max-width: 900px){
    margin-bottom: 22px;
  }
`

const Bio = styled.p`
  padding: 80px;
  text-align: center;

  @media screen and (max-width: 900px){
    padding: 0;
  }
`

class KeynoteSpeaker extends React.Component {
  render() {
    return (
      <Container>
        <SpeakerImageContainer>
          <img src={SpeakerImage} />
        </SpeakerImageContainer>
        <SpeakerBioContainer>
          <Name>Ian Tracey</Name>
          <Title>Software Engineer</Title>
          <Company>at Pinterest</Company>
          <Bio>
            As a Founder of Hack Arizona and current software engineer at
            Pinterest, Ian Tracey has an immense passion for helping hackers
            rapidly innovate and validate their ideas; while wishing to live in
            a future where technology can serve as a catalyst for immense social
            change.
          </Bio>
        </SpeakerBioContainer>
      </Container>
    )
  }
}

export default KeynoteSpeaker
