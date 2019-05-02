import React from 'react'
import styled from 'styled-components'

{
  /* Sponsors Logos */
}
import Jacobs from '../assets/sponsors/Jacobs.png'
import Microsoft from '../assets/sponsors/Microsoft.png'
import Honeywell from '../assets/sponsors/Honeywell.svg'
import UALibraries from '../assets/sponsors/UA_Library.jpeg'
import UACS from '../assets/sponsors/UA_CS.png'
import Modular2 from '../assets/sponsors/Modular_2.png'
import Rincon from '../assets/sponsors/Rincon.png'
import Amazon from '../assets/sponsors/Amazon.png'
import Raytheon from '../assets/sponsors/Raytheon.png'
import Google from '../assets/sponsors/Google.png'
import Simpleview from '../assets/sponsors/Simpleview.png'
import Paradox from '../assets/sponsors/Paradox.png'
import Statefarm from '../assets/sponsors/Statefarm.png'
import AmericanExpress from '../assets/sponsors/AmericanExpress.png'
import Sandia from '../assets/sponsors/Sandia.png'
import Dataforth from '../assets/sponsors/Dataforth.png'
import USAA from '../assets/sponsors/USAA.png'
import HexagonMining from '../assets/sponsors/Hexagon.jpg'
import GeneralDynamics from '../assets/sponsors/GeneralDynamics.png'
import FlyMe from '../assets/sponsors/fly-me.png'
import Hedera from '../assets/sponsors/Hedera.png'
import Pinterest from '../assets/sponsors/Pinterest.jpg'
import GoogleCloud from '../assets/sponsors/Google-Cloud.png'

const Container = styled.div`
  margin: auto;
  width: 90vw;
`

const TierTitle = styled.h1`
  text-align: center;
`

const CohostTier = styled.div`
  display: flex;
`

const Cohost = styled.div`
  border: 1px solid gray;
  flex: 1;
  height: 300px;
  text-align: center;

  & > img {
    height: 600px;
    margin-top: -150px;
  }

  @media screen and (max-width: 900px){
    height: auto;

    & > img { 
      height: auto;
      margin-top: 22px;
    }
  }
`

const Tier = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
`

const Sponsor1 = styled.div`
  border: 1px solid gray;
  flex: 1;
  height: 200px;
  text-align: center;

  & > img {
    max-width: 500px;
  }

  @media screen and (max-width: 900px){
    & > img { 
      max-width: 78vw;
      margin: auto;
    }
  }
`

const Sponsor2 = styled.div`
  border: 1px solid gray;
  flex: 1;
  height: 140px;
  padding: auto;
  text-align: center;

  & > img {
    padding: 12px;
    max-width: 300px;
  }
`

const Sponsor3 = styled.div`
  border: 1px solid gray;
  flex: 1;
  height: 100px;
  text-align: center;

  & > img {
    padding: 34px 12px 12px 12px;
    max-width: 250px;
  }
`

const Sponsor4 = styled.div`
  border: 1px solid gray;
  flex: 1;
  height: 80px;
  text-align: center;

  & > img {
    padding: 12px;
    height: 100%;
  }
`

class SponsorGrid extends React.Component {
  render() {
    return (
      <Container>
        <CohostTier>
          <Cohost>
            <img src={Jacobs}/>
          </Cohost>
        </CohostTier>
        <Tier>
          <Sponsor1>
            <img style={{ margin: '60px 20px 12px 20px' }} src={Honeywell} />
          </Sponsor1>
          <Sponsor1>
            <img style={{ margin: '54px 40px 40px 40px' }} src={UALibraries} />
          </Sponsor1>
          <Sponsor1>
            <img style={{ height: '190px'}} src={Modular2} />
          </Sponsor1>
        </Tier>
        <Tier>
          <Sponsor2>
            <img style={{ margin: '-8px 0 0 20px' }} src={Microsoft} />
          </Sponsor2>
          <Sponsor2>
            <img
              style={{ height: '100px', marginTop: '24px' }}
              src={Raytheon}
            />
          </Sponsor2>
          <Sponsor2><img style={{ height: '140px' }} src={Rincon}/></Sponsor2>
          <Sponsor2>
            <img style={{ height: '200px', marginTop: '-30px' }} src={Amazon} />
          </Sponsor2>
        </Tier>
        <Tier>
          <Sponsor3>
            <img
              style={{
                maxWidth: '250px'
              }}
              src={Statefarm}
            />
          </Sponsor3>
          <Sponsor3><img src={Simpleview}/></Sponsor3>
          <Sponsor3><img src={UACS}/></Sponsor3>
        </Tier>
        <Tier>
          <Sponsor4>
            <img src={Paradox} />
          </Sponsor4>
          <Sponsor4>
            <img src={AmericanExpress} />
          </Sponsor4>
          <Sponsor4><img src={GeneralDynamics}/></Sponsor4>
          <Sponsor4><img src={Dataforth}/></Sponsor4>
        </Tier>
        <Tier>
          <Sponsor4><img src={USAA}/></Sponsor4>
          <Sponsor4><img src={HexagonMining}/></Sponsor4>
          <Sponsor4><img src={FlyMe}/></Sponsor4>
          <Sponsor4><img src={Sandia}/></Sponsor4>
        </Tier>
        <Tier>
          <Sponsor4><img src={Pinterest}/></Sponsor4>
          <Sponsor4><img src={Hedera}/></Sponsor4>
          <Sponsor4>
            <img src={Google} />
          </Sponsor4>
          <Sponsor4><img src={GoogleCloud}/></Sponsor4>
        </Tier>
      </Container>
    )
  }
}

export default SponsorGrid
