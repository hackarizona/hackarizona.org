import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import get from "lodash/get";

import Layout from "../components/Layout";
import { rhythm, scale } from "../utils/typography";

const Content = styled.div`
  max-width: 800px;
  margin: auto;

  @media screen and (max-width: 900px) {
    max-width: 80vw;
  }
`;

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

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, "data.site.siteMetadata.title");
    const siteDescription = post.excerpt;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: "en" }}
          meta={[{ name: "description", content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <GradientBG>
          <h1
            style={{
              ...scale(1.5),
              textAlign: "center",
              marginTop: 0,
              paddingTop: "40px"
            }}
          >
            <Link
              style={{
                boxShadow: "none",
                textDecoration: "none"
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
          <div>
            <h1
              style={{
                color: "white",
                textAlign: "center",
                paddingBottom: "80px"
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: "block",
                marginTop: rhythm(-3)
              }}
            >
              {post.frontmatter.date}
            </p>
            <Content dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
          <div
            style={{
              textAlign: "center",
              color: "white",
              padding: "12px",
              marginBottom: '60px'
            }}
          >
            <Link
              to="/#prizes"
              style={{
                color: "white",
                fontSize: "18px",
              }}
            >
              See more prizes!
            </Link>
          </div>
        </GradientBG>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        company
      }
    }
  }
`;
