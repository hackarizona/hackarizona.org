import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Sponsorship = (props) => (
    <Layout>
        <Helmet>
            <title>Sponsor Hack Arizona </title>
            <meta name="description" content="Hack Arizona Sponsorship Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Sponsorship</h2>
                    </header>
                    <p>Thank you you so much for your interest in helping us foster
                        a world class hacker culture in the Southwest. 
                    </p>
                </div>
            </section>

            {/* Recruitement Section */}
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Recruiting</h3>
                            </header>
                            <p>
                                At Hack Arizona, one of our main goals is to help our attendees launch their
                                professional careers. If your interested, we will try and provide your company with all the tools 
                                and information you need to hire qualified candidates for both internships and full time opportunities.
                                This includes applicant resumes, portfolios, websites and Github profiles.  
                            </p>
                        </div>
                    </div>
                </section>

                {/* Branding and Promotion Section */}
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Branding & Promotion</h3>
                            </header>
                            <p>
                                As a sponsor of Hack Arizona, your company will be able to prominently and effectively 
                                showcase your mission to our year's attendees. We promise to deliver this through stage 
                                time for presentations, workshops, branded meals, logos on conference swag and more!
                            </p>
                        </div>
                    </div>
                </section>

                {/* User Testing */}
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>User Testing</h3>
                            </header>
                            <p>
                                Hack Arizona provides you the chance to see how developers use your technology in real time, 
                                as well as get feedback on their expeirence. Over the course of our hackathon, we offer you 
                                the ability to host workshops, bring mentors, and sponsor specifc challenges and prizes to 
                                incentivize attendees to use your technology. At our hackathon, you will have the chance to bring 
                                new technologies and mentorship to both veteran and first-time hackers while obtaining valuable 
                                feedback and user data. 
                            </p>
                        </div>
                    </div>
                </section> 

                {/* Supporting the Community Section */}
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Diversity</h3>
                            </header>
                            <p>
                                As a sponsor, you can help us promote diversity and inclusion in computer science 
                                and engineering. Last year, we were proud to host our most diverse hackathon to date among 
                                attendees. This year, we strive to continue supporing all of the underrepresented minorities 
                                and women in the field of computer science. Help us.....
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Sponsorship