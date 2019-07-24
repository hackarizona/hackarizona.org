import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major">
        {/* Display MLH badge */}
        <a id="mlh-trust-badge" style={{display: 'block', maxWidth: 100 + 'px', minWidth: 60 + 'px', position: 'fixed', right: 150 + 'px', top: 0, width: 10 + '%', zIndex: 100000}} 
        href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=red" target="_blank">
            <img src={"https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-red.svg"} alt="Major League Hacking 2020 Hackathon Season" style={{width:100 + '%'}}/>
        </a>
        <div className="inner">
            <header className="major">
                <h1>Hack Arizona</h1>
                <h2>Jan 17th-19th 2020.</h2>
            </header>
            <div className="content">
                <ul className="actions">
                    <li><a href="https://list.arizona.edu/sympa/subscribe/hackaz" className="button next scrolly">Pre-Register Today</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
