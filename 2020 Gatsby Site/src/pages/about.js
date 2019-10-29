import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import uawomenshack from '../assets/images/uawomenshack.jpg'
import pic08 from '../assets/images/pic08.jpg'

const About = (props) => (

    <Layout>
        <Helmet>
            <title>About Hack Arizona</title>
            <meta name="description" content="About Page" />
        </Helmet>

        <BannerLanding />

        <div id="main" className="alt">

            {/* Intro + Categories */}
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About</h1>
                    </header>
                    <p>
                        Hack Arizona is a free 36 hour collegiate hackathon where 
                        teams of up to four compete to win prizes; all while attending 
                        fun activities and lots of educational sessions.
                    </p>
                    <h3>Some categories from last year include: </h3>
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <h3>Social Good</h3>
                            <p>Hack that contribute the most social good.</p>
                        </div>
                        <div className="col-4">
                            <h3>Blockchain / DLT</h3>
                            <p>Best Dapp, blockchain, or distributed ledger project.</p>
                        </div>
                        <div className="col-4">
                            <h3>Artifical Intelligence</h3>
                            <p>Best overall hack involving Artifical INtelligence.</p>
                        </div>
                        <div className="col-4">
                            <h3> VR / AR</h3>
                            <p>Most interesting implementation of Artifical or Virtual Reality</p>
                        </div>
                        <div className="col-4">
                            <h3>Cyber Security</h3>
                            <p>Most suprising cyber security project.</p>
                        </div>
                        <div className="col-4">
                            <h3>Hardware & Robotics</h3>
                            <p>Best use of hardware (we like self driving things :) )</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        {/* Mission Statement */}
        <div id="main" className = "alt">
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Our Mission</h3>
                            </header>
                            <p>
                                We seek to foster a culture of hacker mentality, social good 
                                and entrepreneurship open and inclusive to anyone
                                with an interest in technology. At Hack Arizona, individuals can
                                come learn about new technology, collaborate with a team to
                                create a project and participate in any of several entertaining
                                activities hosted throughout the event. As an organization, 
                                our mission is to promote the positive social impact technology 
                                can have on the world while fostering an open platform that provides 
                                individuals with all levels of expertise the chance to work with
                                and learn about new technology.  
                            </p>  
                        </div>
                    </div>
                </section>
                
                {/*Sister Events Section */}
                <section>
                    <Link to="/generic" className="image">
                        <img src={uawomenshack} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sister Events</h3>
                            </header>
                            <p> 3 goals is a hat-trick and 3 hackathons 
                                is a hack-trick. Feel free to check out and attend 
                                two other hackathons going on right here in Arizona. 
                                Our friends over at Arizona State University are hosting SunHacks 
                                this year on September 20-22, 2019. After SunHacks, our close friends 
                                at the University of Arizona Libraries are hosting the University of Arizona Women's
                                Hackathon, a women-founded, non-competitive, free hackathon designed by and 
                                for women and allies. This is one of the only women-centered hackathons in 
                                the southwest and will be hosted at the Tucson Convention Center from 
                                October 18-20, 2019. 
                            </p>
                            <ul className="actions">
                                <li><a href="https://sunhacks.io" className="button">Sun Hacks</a></li>
                                <li><a href="https://womenshackathon.arizona.edu" className="button">UA Women's Hackathon</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default About