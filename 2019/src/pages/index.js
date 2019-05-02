import React from "react";
import { Link, graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import { rhythm, scale } from "../utils/typography";
import styled from "styled-components";

/* Components */
import Layout from "../components/Layout";
import SponsorGrid from "../components/SpnosorGrid";
import SponsorsGridImage from "../assets/sponsorgrid.png";
import Keynote from "../components/KeynoteSpeaker";

const GradientBG = styled.div`
  margin: 0;
  padding: 0;
  background: rgba(10, 141, 255, 1);
  background: -moz-linear-gradient(
    top,
    rgba(10, 141, 255, 1) 0%,
    rgba(20, 142, 248, 1) 4%,
    rgba(255, 175, 75, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(10, 141, 255, 1)),
    color-stop(4%, rgba(20, 142, 248, 1)),
    color-stop(100%, rgba(255, 175, 75, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(10, 141, 255, 1) 0%,
    rgba(20, 142, 248, 1) 4%,
    rgba(255, 175, 75, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(10, 141, 255, 1) 0%,
    rgba(20, 142, 248, 1) 4%,
    rgba(255, 175, 75, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(10, 141, 255, 1) 0%,
    rgba(20, 142, 248, 1) 4%,
    rgba(255, 175, 75, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(10, 141, 255, 1) 0%,
    rgba(20, 142, 248, 1) 4%,
    rgba(255, 175, 75, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0a8dff', endColorstr='#ffaf4b', GradientType=0 );
  color: white;
  width: 100vw;
`;

const YoutubeEmbed = styled.div`
  margin-left: calc(50% - 320px);
  max-width: 600px;
  min-height: 320px;

  & > iframe {
    width: 100%;
    min-height: 320px;
    height: 100%;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin: 60px 0 60px 0;
  margin-bottom: 60px;
  font-size: 38px;
`;

const SponsorsImage = styled.div`
  width: 100vw;
  margin: auto;
  display: flex; 
  align-items: center;

  & > img { 
    margin-left: 10vw;
    width: 80vw; 
  }

  @media screen and (max-width: 900px) {
    & > img {
      margin-left: -0;
      width: 120vw;
    }
  }
`;

const MessageContainer = styled.div`
  margin: auto;
  text-align: center;
  width: 400px;

  & > p {
    font-size: 18px;
  }

  & > ul {
    list-style-type: none;
  }

  @media screen and (max-width: 900px) {
    width: 80%;
  }
`;
const Date = styled.h1`
  color: white;
  text-align: center;
`;

const AgendaItem = styled.div`
  flex: 1;
  display: flex;

  @media screen and (max-width: 600px) {
    padding: 12px;
    width: 100vw;
  }
`;

const AgendaDetailHiddenMobile = styled.div`
  text-align: center;
  flex: 1;
  font-size: 18px;
  padding: 12px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const AgendaDetail = styled.div`
  text-align: center;
  flex: 1;
  font-size: 18px;
  padding: 12px;

  @media screen and (max-width: 900px) {
    padding: 12px;
  }
`;

const RegistrationBoxes = styled.div`
  display: flex;
  margin-left: -50%;
  margin-top: 60px;
  width: 200%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Box = styled.a`
  box-shadow: none;
  color: white;
  flex: 1;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;

  @media screen and (max-width: 900px) {
    margin-top: 22px;
  }
`;

class Index extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const siteDescription = get(
      this,
      "props.data.site.siteMetadata.description"
    );
    const prizes = get(this, "props.data.prizes.edges");
    const fridaySchedule = get(this, "props.data.fridaySchedule.edges");
    const saturdaySchedule = get(this, "props.data.saturdaySchedule.edges");
    const sundaySchedule = get(this, "props.data.sundaySchedule.edges");
    const faqs = get(this, "props.data.faq.edges");
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: "en" }}
          meta={[{ name: "description", content: siteDescription }]}
          meta={[
            {
              name: "viewport",
              content:
                "width=device-width, initial-scale=1.0,  minimum-scale=1.0"
            }
          ]}
          title={siteTitle}
        />
        <GradientBG style={{ padding: "60px" }}>
          <h1
            style={{
              ...scale(1.5),
              marginTop: rhythm(1.5),
              textAlign: "center"
            }}
          >
            <Link
              style={{
                boxShadow: "none",
                textDecoration: "none",
                color: "white"
              }}
              to={"/"}
            >
              Hack Arizona
            </Link>
          </h1>
          <h3
            style={{
              marginTop: rhythm(-0.5),
              marginBottom: rhythm(1.5),
              textAlign: "center",
              color: "white"
            }}
          >
            Powered by <a href="https://jacobs.com">Jacobs</a>
          </h3>
          <YoutubeEmbed>
            <iframe
              src="https://www.youtube.com/embed/e6b5szAeDqA?start=72"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </YoutubeEmbed>
          <MessageContainer>
            <h2 style={{ color: "white" }}>
              January 18-20th, at the University of Arizona
            </h2>
            <h1 style={{ color: "white" }}>Register now!</h1>
            <RegistrationBoxes>
              <Box href="https://airtable.com/shrXWfagMcHHGnhVI">Attendees</Box>
              <Box href="https://airtable.com/shrCsRlDHcqPJgkBG">Mentors</Box>
              <Box href="https://airtable.com/shrGWkt7LWq5CRH9g">
                Volunteers
              </Box>
            </RegistrationBoxes>
          </MessageContainer>
        </GradientBG>
        <div style={{ marginTop: "0", padding: "60px 0 60px 0" }}>
          <SectionTitle style={{ color: "rgba(255, 175, 75, 1)" }}>
            Our Sponsors!
          </SectionTitle>
          <MessageContainer>
            <p>
              Hack Arizona is supported by some of the best and most exciting
              companies in the world. These companies engage with attendees
              throughout the weekend, provide challenges to implement their
              technology, and help foster our world-class community of
              innovation and entrepreneurship.
            </p>
          </MessageContainer>
        </div>
        <div id="sponsors" style={{ backgroundColor: "black" }}>
          <SponsorsImage>
            <img src={SponsorsGridImage} />
          </SponsorsImage>
        </div>
        <GradientBG style={{ paddingBottom: "60px" }}>
          <SectionTitle
            style={{ marginTop: "0", paddingTop: "60px", color: "white" }}
            id="agenda"
          >
            Agenda Overview
          </SectionTitle>
          <h2 style={{ color: "white", textAlign: "center" }}>
            {" "}
            <a
              style={{ color: "white" }}
              href="https://first-byte.org/hack-arizona-2019"
              target="_blank"
            >
              View our 20+ firstByte education sessions here!
            </a>
          </h2>
          <Date>Friday (1/18)</Date>
          <AgendaItem style={{ borderBottom: "2px solid white" }}>
            <AgendaDetail>Start</AgendaDetail>
            <AgendaDetailHiddenMobile>End</AgendaDetailHiddenMobile>
            <AgendaDetail>Title</AgendaDetail>
            <AgendaDetail>Location</AgendaDetail>
          </AgendaItem>
          {fridaySchedule.map(({ node }) => {
            return (
              <AgendaItem key={node.frontmatter.name}>
                <AgendaDetail>{node.frontmatter.startTime}</AgendaDetail>
                <AgendaDetailHiddenMobile>
                  {node.frontmatter.endTime}
                </AgendaDetailHiddenMobile>
                <AgendaDetail>{node.frontmatter.name}</AgendaDetail>
                <AgendaDetail>{node.frontmatter.location}</AgendaDetail>
              </AgendaItem>
            );
          })}
          <Date>Saturday (1/19)</Date>
          <AgendaItem style={{ borderBottom: "2px solid white" }}>
            <AgendaDetail>Start</AgendaDetail>
            <AgendaDetailHiddenMobile>End</AgendaDetailHiddenMobile>
            <AgendaDetail>Title</AgendaDetail>
            <AgendaDetail>Location</AgendaDetail>
          </AgendaItem>
          {saturdaySchedule.map(({ node }) => {
            return (
              <AgendaItem key={node.frontmatter.name}>
                <AgendaDetail>{node.frontmatter.startTime}</AgendaDetail>
                <AgendaDetailHiddenMobile>
                  {node.frontmatter.endTime}
                </AgendaDetailHiddenMobile>
                <AgendaDetail>{node.frontmatter.name}</AgendaDetail>
                <AgendaDetail>{node.frontmatter.location}</AgendaDetail>
              </AgendaItem>
            );
          })}
          <Date>Sunday (1/20)</Date>
          <AgendaItem style={{ borderBottom: "2px solid white" }}>
            <AgendaDetail>Start</AgendaDetail>
            <AgendaDetailHiddenMobile>End</AgendaDetailHiddenMobile>
            <AgendaDetail>Title</AgendaDetail>
            <AgendaDetail>Location</AgendaDetail>
          </AgendaItem>
          {sundaySchedule.map(({ node }) => {
            return (
              <AgendaItem key={node.frontmatter.name}>
                <AgendaDetail>{node.frontmatter.startTime}</AgendaDetail>
                <AgendaDetailHiddenMobile>
                  {node.frontmatter.endTime}
                </AgendaDetailHiddenMobile>
                <AgendaDetail>{node.frontmatter.name}</AgendaDetail>
                <AgendaDetail>{node.frontmatter.location}</AgendaDetail>
              </AgendaItem>
            );
          })}
          <p style={{ textAlign: "center", paddingTop: "44px" }}>
            Please note that events and times are subject to change :)
          </p>
          <h2 style={{ textAlign: "center" }}>
            {" "}
            <a
              style={{ color: "white" }}
              href="https://first-byte.org/hack-arizona-2019"
              target="_blank"
            >
              View all of our educational sessions
            </a>
          </h2>
        </GradientBG>
        <div style={{ marginTop: "0", padding: "60px 0 60px 0" }}>
          <SectionTitle id="prizes" style={{ color: "rgba(62, 143, 245, 1)" }}>
            2019 Prize Challenges
          </SectionTitle>
          <div style={{ marginTop: "0", padding: "0 0 60px 0", border: '1px solid orange' }}>
            <SectionTitle style={{ fontSize: '26px', color: "rgba(255, 175, 75, 1)" }}>
              An overview of our rules
            </SectionTitle>
            <MessageContainer>
              <ul style={{ textAlign: "left" }}>
                <li>- Only students can compete for prizes</li>
                <li>- Sizes are of 1-4</li>
                <li>- Projects must be started at 9:00pm Friday night and submited by 9:00am Sunday morning</li>
                <li>- You can submit your project to (and win) as many categories as you can</li>
              </ul>
            </MessageContainer>
          </div>
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "0",
              maxWidth: rhythm(24),
              padding: rhythm(1 / 3)
            }}
          >
            {prizes.map(({ node }) => {
              return (
                <div
                  key={node.frontmatter.title}
                  style={{ borderBottom: "1px solid blue" }}
                >
                  <h2
                    style={{
                      textAlign: "center",
                      marginBottom: rhythm(1 / 4),
                      lineHeight: "42px",
                      color: "rgba(62, 143, 245, 1)"
                    }}
                  >
                    {node.frontmatter.title}
                  </h2>
                  <h3 style={{ color: "rgba(255, 175, 75, 1)" }}>
                    Sponsored by:{" "}
                    <a href={node.frontmatter.website} target="_blank">
                      {node.frontmatter.company}
                    </a>
                  </h3>
                  <p>Challenge description: {node.frontmatter.teaser}</p>
                  <p>Prize: {node.frontmatter.prize}</p>
                  <h4 style={{ textAlign: "center" }}>
                    <Link to={node.fields.slug} style={{margin: '8px', lineHeight: '22px'}}>
                      View the details of this challenge!
                    </Link>
                  </h4>
                </div>
              );
            })}
          </div>
          <p style={{ textAlign: "center", paddingTop: "44px" }}>
            Please note that there are still more prizes to be announced!
          </p>
        </div>
        <GradientBG style={{ padding: "60px" }}>
          <SectionTitle
            id="keynote-speaker"
            style={{ color: "white", fontSize: "36px" }}
          >
            Keynote Speaker
          </SectionTitle>
          <Keynote />
          <SectionTitle id="faq" style={{ color: "white", marginTop: "60px" }}>
            Frequently Asked Questions
          </SectionTitle>
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "0",
              maxWidth: rhythm(24),
              padding: rhythm(1 / 2)
            }}
          >
            {faqs.map(({ node }) => {
              return (
                <div key={node.frontmatter.question}>
                  <h3
                    style={{
                      color: "white",
                      textDecoration: "underline",
                      marginBottom: rhythm(1 / 4)
                    }}
                  >
                    {node.frontmatter.question}
                  </h3>
                  <p>{node.frontmatter.answer}</p>
                </div>
              );
            })}
          </div>
        </GradientBG>
      </Layout>
    );
  }
}

export default Index;

{
  /* Currently using aliases to query specific folders in our data */
}
{
  /* Specific sections of data can be accessed via props.data.__category__.fields */
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    faq : allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/faq/.*\\.md$/"}}
    ) {
      edges {
        node {
          frontmatter {
            question
            answer
          }
        }
      }
    }
    prizes : allMarkdownRemark(
      sort: { fields: [frontmatter___order], order: ASC },
      filter: {fileAbsolutePath: {regex: "/prizes/.*\\.md$/"}}
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            website
            teaser
            prize
            order
          }
          fields{ 
            slug
          }
        }
      }
    }
    fridaySchedule : allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC },
      filter: {fileAbsolutePath: {regex: "/fridaySchedule/.*\\.md$/"}}
    ) {
      edges {
        node {
          frontmatter {
            name
            startTime
            endTime
            location
          }
        }
      }
    }
    saturdaySchedule : allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC },
      filter: {fileAbsolutePath: {regex: "/saturdaySchedule/.*\\.md$/"}}
    ) {
      edges {
        node {
          frontmatter {
            name
            startTime
            endTime
            location
          }
        }
      }
    }
    sundaySchedule : allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC },
      filter: {fileAbsolutePath: {regex: "/sundaySchedule/.*\\.md$/"}}
    ) {
      edges {
        node {
          frontmatter {
            name
            startTime
            endTime
            location
          }
        }
      }
    }
  }
`;
