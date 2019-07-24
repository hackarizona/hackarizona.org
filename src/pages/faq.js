import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const FAQ = (props) => (
    <Layout>
        <Helmet>
            <title>FAQ</title>
            <meta name="description" content="Freqeuntly Asked Questions" />
        </Helmet>

        <BannerLanding />

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>FAQ</h1>
                    </header>

            <dl>
                <dt>What is a hackathon?</dt>
                    <dd>
                        <p>
                        </p>
                    </dd>
                <dt>Who can attend the event?</dt>
                    <dd>
                        <p>All college, university, or high school students 18 years or older are 
                            welcome to attend. </p>
                    </dd>
                <dt>I don't have a team. Can I still partcipate?</dt>
                    <dd>
                        <p>Of course! Teams are by no means a prerequiste for coming 
                            to Hack Arizona. We'll host several team formation sessions before 
                            the hacking starts so that you can get to know your fellow attendees. 
                            We suggest working in a team so that you can break down the work into 
                            sizeable chunks utilizing each member's strengths. 
                        </p>
                    </dd>
                <dt>Is Hack Arizona a free event?</dt>
                    <dd>
                        <p>Hack Arizona is a free event, including wifi, food, drinks, prizes
                            and some awesome swag!</p>
                    </dd>
                <dt>What should I bring?</dt>
                    <dd>
                        <p>
                        You'll need to bring your student ID, laptop, phone, chargers, toiletries, and any 
                        sleeping items you might want.
                        </p>
                    </dd>
                <dt>How do I get there?</dt>
                <dd>
                    <p>
                    </p>
                </dd>
                <dt>I'm not a student. How do I get involved?</dt>
                <dd>
                    <p>
                    </p>
                </dd>
                <dt>Can I get travel reimbursements?</dt>
                <dd>
                    <p>
                    </p>
                </dd>
                <dt>My question wasn't answered here.</dt>
                <dd>
                    <p>
                    Send us an email at team@hackarizona.org or reach out to us 
                    on facebook, instagram or twitter and we'll get back to you 
                    as soon as possible.
                    </p>
                </dd>
                
            </dl>
            </div>
        </section>
    </div>

    </Layout>
)

export default FAQ