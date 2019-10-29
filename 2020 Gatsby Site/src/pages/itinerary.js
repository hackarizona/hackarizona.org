import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Itinerary = (props) => (
    <Layout>
        <Helmet>
            <title>Schedule 2020 </title>
            <meta name="description" content="Schedule Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Hack Arizona Schedule of Events 2020</h1>
                    </header>

                    <div className ="table-wrapper">

                        {/* Schedule for Friday */}
                        <h3>Friday</h3>
                        <table className ="alt">
                            <thead>
                                <tr>
                                    <th>Start Time</th>
                                    <th>Activity</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>4:30 PM</td>
                                <td>Check-In</td>
                                <td>Science & Engineering Library</td>
                            </tr>
                            <tr>
                                <td>4:30 PM</td>
                                <td>Sponsor Exhibition</td>
                                <td>UA Mall</td>
                             </tr>
                            <tr>
                                <td>5:30 PM</td>
                                <td>Reception Dinner</td>
                                <td>UA Mall</td>
                            </tr>
                            <tr>
                                <td>7:30 PM</td>
                                <td>Opening Ceremony</td>
                                <td>Centennial Hall</td>
                            </tr>
                            <tr>
                                <td>9:00 PM</td>
                                <td>Hacking Begins</td>
                                <td>Science and Engineering Library</td>
                            </tr>
                            <tr>
                                <td>9:00 PM</td>
                                <td>Team Formation</td>
                                <td>Under Koffler</td>
                            </tr>
                            </tbody>
                        </table>

                        {/* Schedule for Saturday */}
                        <h3>Saturday</h3>
                        <table className ="alt">
                            <thead>
                                <tr>
                                    <th>Start Time</th>
                                    <th>Activity</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>4:30 PM</td>
                                <td>Check-In</td>
                                <td>Science & Engineering Library</td>
                            </tr>
                            </tbody>
                        </table>


                        {/* Schedule for Sunday */}
                        <h3>Sunday</h3>
                        <table className ="alt">
                            <thead>
                                <tr>
                                    <th>Start Time</th>
                                    <th>Activity</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>4:30 PM</td>
                                <td>Check-In</td>
                                <td>Science & Engineering Library</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                  </div>
            </section>
        </div>

    </Layout>
)

export default Itinerary