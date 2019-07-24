import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Team = (props) => (
    <Layout>

        <Helmet>
            <title>Meet the Team</title>
            <meta name="description" content="Meet the Team Page" />
        </Helmet>

        <BannerLanding />

        <div id="main" className="alt">

        {/* Team Photo + BIO */}
        <section id="one">
            <div className="inner">
                <header className="major">
                    <h1>Meet the Team</h1>
                </header>
            <p>
              We're always looking for new organizers and volunteers! If you are interested 
              in helping us plan for the upcoming hackathon and would like to join the 
              Hack Arizona team send us an email at team@hackarizona.org.
             </p>

            {/* Meet the team grid */} 
             <div className="box alt">
                <div className="grid-wrapper">
                        <div className="col-4">
                            <span className="image fit"><img src={pic08} alt="" style ={{borderradius: "50px"}} /></span>
                            <h3>Andrew Morales</h3>
                            <p>Executive Director</p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic08} alt="" /></span>
                            <h3>Jeremy Bernick</h3>
                            <p>Director of Sponosorship</p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic08} alt="" /></span>
                            <h3>Amanda Minke</h3>
                            <p>Director of Volunteers</p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic08} alt="" /></span>
                            <h3>Royce Viklund</h3>
                            <p>Director of Logistics</p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic08} alt="" /></span>
                            <h3>Colton Flowers</h3>
                            <p>Director of Education</p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic08} alt="" /></span>
                            <h3>Phillip Benoit</h3>
                            <p>Director of Activities</p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic08} alt="" /></span>
                            <h3>Martin Valencia</h3>
                            <p>Director of Media & Design</p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic08} alt="" /></span>
                            <h3>Connor Brett</h3>
                            <p>Team Developer & Organizer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </Layout>
)

export default Team