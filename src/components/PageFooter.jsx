/* --- Packages and Components --- */
import React from "react";
import styled from "styled-components";
import { animateScroll } from "react-scroll";

import { mediaSize } from "../site/siteTools";

/* --- Images --- */
//import BackgroundShape from '../static/img/shapes/footer_bg@2x.png';
import LogoWhite from "../assets/logos/hackaz-logo.jpg";
import InstaIcon from "../assets/logos/instagram.png";
import EmailIcon from "../assets/logos/email.png";
import FacebookIcon from "../assets/logos/facebook.png";
import GithubIcon from "../assets/logos/github.png";
import LinkedInIcon from "../assets/logos/linkedin.png";
import TwitterIcon from "../assets/logos/twitter.png";

/* --- Styles --- */
const PageContainer = styled.div`
  margin: 0;
  position: relative;
  display: flex;
  box-sizing: border-box;

`;

const ContentContainer = styled.div`
  padding: 0;
  padding-top: 5vw;
  margin: auto;
  width: 50vw;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 12vw 4vw 2vw;
  grid-template-areas:
    "logo"
    "icons"
    "copyright";

  justify-items: center;

  ${mediaSize.tablet`
    padding-top: 21vw;
    width: 90vw;
    grid-template-columns: auto auto;
    grid-template-rows: 10vw 5vw;
    grid-template-areas:
      'logo icons'
      'copyright links';
  `};

  ${mediaSize.phone`

  `};
`;

const LogoContainer = styled.div`
  grid-area: logo;
  width: 4vw;
  height: 4vw;
  text-align: center;
  cursor: pointer;

  & > img {
    max-height: 150%;
    max-width: 100%;
    width: auto;
    height: auto;
    margin: auto;
    vertical-align: middle;
  }

  ${mediaSize.tablet`
    justify-self: start;
    align-self: center;
    text-align: left;
    width: 8vw;
    height: 8vw;
  `};

  ${mediaSize.phone`

  `};
`;

const IconsContainer = styled.div`
  grid-area: icons;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > img.icons {
    max-width: 2.5vw;
    max-height: 2.5vw;
    cursor: pointer;
    transition: all 250ms linear;

    &:hover {
      filter: brightness(75%);
    }

    ${mediaSize.tablet`
      max-width: 3vw;
      max-height: 3vw;
    `};
  }

  ${mediaSize.tablet`
    justify-self: end;
    align-self: end;
    width: 50%;

  `};

  ${mediaSize.phone`

  `};
`;

const CopyrightContainer = styled.div`
  grid-area: copyright;
  color: white;

  ${mediaSize.tablet`
    justify-self: start;
    align-self: center;
    font-size: 2vw;
  `};

  ${mediaSize.phone`

  `};
`;

/* --- Component --- */
class PageFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageContainer>
        <ContentContainer>
          <LogoContainer onClick={() => animateScroll.scrollToTop()}>
            <img className="imageLogo" src={LogoWhite} alt="HackArizona logo." />
          </LogoContainer>

          <IconsContainer>
            {/* eslint-disable */}
            <img
              className="icons"
              src={InstaIcon}
              alt="Contact Icon."
              onClick={() =>
                window.open("https://www.instagram.com/hackarizona/")
              }
            />
            <img
              className="icons"
              src={FacebookIcon}
              alt="Contact Icon."
              onClick={() =>
                window.open("https://www.facebook.com/hackarizona/")
              }
            />
            <img
              className="icons"
              src={LinkedInIcon}
              alt="Contact Icon."
              onClick={() =>
                window.open("https://www.linkedin.com/company/hack-arizona/")
              }
            />
            <img
              className="icons"
              src={TwitterIcon}
              alt="Contact Icon."
              onClick={() => window.open("https://twitter.com/hack_arizona")}
            />
            <img
              className="icons"
              src={GithubIcon}
              alt="Contact Icon."
              onClick={() => window.open("https://github.com/hackarizona")}
            />
            <img
              className="icons"
              src={EmailIcon}
              alt="Contact Icon."
              onClick={() => window.open("mailto:team@hackarizona.org")}
            />
            {/* eslint-enable */}
          </IconsContainer>

          <CopyrightContainer>
            <div className="hackArizonaCopyright">© HackArizona 2020</div>
          </CopyrightContainer>

        </ContentContainer>
      </PageContainer>
    );
  }
}

export default PageFooter;
