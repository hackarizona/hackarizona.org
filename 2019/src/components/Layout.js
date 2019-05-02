import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'

const Navbar = styled.div`
  border-bottom: 1px solid blue;
  display: flex;
  width: 100vw;
`

const NavItem = styled(Link)`
  font-size: 32px;
  text-align: center;
  flex: 1;

  @media screen and (max-width: 900px) {
    font-size: 22px;

    &:nth-child(2) {
      padding-left: 6px;
    }
  }


  @media screen and (max-width: 400px){
    font-size: 18px;
  }

`

const FooterContainer = styled.div`
  display: flex;
  margin-bottom: 12px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`

const Social = styled.div`
  text-align: center;
  flex: 1;

  & > h2 {
    & > a {
      color: orange;
    }
  }
`

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
  margin-top: 60px;
  padding: 60px;
  width: 100vw;
`

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    let header = (
      <div>
        <Navbar>
          <NavItem to="/#agenda">Agenda</NavItem>
          <NavItem to="/#sponsors">Sponsors</NavItem>
          <NavItem to="/#prizes">Prizes</NavItem>
          <NavItem to="/#faq">FAQ</NavItem>
        </Navbar>
      </div>
    )
    let footer = (
      <FooterContainer>
        <Social>
          <h2>
            <a href="https://airtable.com/shrXWfagMcHHGnhVI">Register</a>
          </h2>
        </Social>
        <Social>
          <h2>
            <a href="https://twitter.com/hack_arizona/">Twitter</a>
          </h2>
        </Social>
        <Social>
          <h2>
            <a href="https://facebook.com/hackarizona/">Facebook</a>
          </h2>
        </Social>
        <Social>
          <h2>
            <a href="https://www.youtube.com/channel/UC94vU02OOICGg9FyR_6NSpA">Youtube</a>
          </h2>
        </Social>
        <Social>
          <h2>
            <a href="https://github.com/hackarizona/">GitHub</a>
          </h2>
        </Social>
      </FooterContainer>
    )
    return (
      <div>
        {header}
        {children}
        {footer}
      </div>
    )
  }
}

export default Layout
