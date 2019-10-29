import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import slot from '../assets/images/slot.jpeg'
import team from '../assets/images/team.jpg'
import about from '../assets/images/about.jpg'
import firstByte from '../assets/images/firstbyte.png'

import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Hack Arizona"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">

                    {/* About Section */}
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${about})`}}>
                            <header className="major">
                                <h3>About</h3>
                                <p>Learn More</p>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>

                    {/* 2020 Hack Arizona Schedule */}
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Itinerary</h3>
                                <p>Schedule for 2020</p>
                            </header>
                            <Link to ="/itinerary" className="link primary"></Link>
                        </article>

                    {/* Sponsorship Section */}
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Sponsorship</h3>
                                <p>Interested in Sponsoring?</p>
                            </header>
                            <Link to="/sponsorship" className="link primary"></Link>
                        </article>

                    {/* Workshops Section */}
                      <article style={{backgroundImage: `url(${firstByte})`}}>
                            <header className="major">
                                <h3>Workshops</h3>
                                <p>This Years Workshops</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>

                    {/* Meet the Team Section */}
                        <article style={{backgroundImage: `url(${team})`}}>
                            <header className="major">
                                <h3>Team</h3>
                                <p>Meet The Team</p>
                            </header>
                            <Link to="/team" className="link primary"></Link>
                        </article>

                    {/* FAQ Section */}
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>FAQ</h3>
                                <p>Questions & Answers</p>
                            </header>
                            <Link to="/faq" className="link primary"></Link>
                        </article>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex