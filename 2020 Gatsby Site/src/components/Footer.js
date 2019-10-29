import React from 'react'
import MLHLogo from '../assets/images/mlh-logo-white.svg'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://twitter.com/hack_arizona" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/hackarizona/" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/hackarizona/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="https://www.linkedin.com/company/hack-arizona" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>

            <ul className="copyright">
                <li>
                    <img src={MLHLogo} style={{width: 50 + '%', height: 50 + '%', justifyContent: 'center', alignItems: 'center'}}/>
                </li>
                <li>&copy; Hack Arizona 2019-2020</li>
                <li>
                    <a href="http://mlh.io/code-of-conduct"> MLH Code of Conduct</a>
                </li>
                <li>
                    <a href="https://www.cs.arizona.edu">Special thanks to the University of Arizona Computer Science Department</a>
                </li>
            </ul>
        </div>
    </footer>
)

export default Footer
