import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentDidMount() {
	}

	render() {
		return (

			<div>
				<div className="Header">
					<div>
						<h2>sejal</h2>
					</div>
				</div>

				<div className="Navigation">
					<h5 style={{ borderBottom: "3px solid #9253d1", paddingBottom: 5 }} onClick={() => this.props.history.push('/')}>About</h5>
					<h5 onClick={() => this.props.history.push('/skills')}>Skills</h5>
					<h5 onClick={() => this.props.history.push('/lab')}>Lab</h5>
					<h5 onClick={() => this.props.history.push('/resume')}>Resume</h5>
					<h5 onClick={() => this.props.history.push('/hire')}>Hire</h5>

				</div>


				<div className="Home">
					<div className="banner">
						<h1>Sejal Chougule</h1>
						<div style={{ marginTop: 15 }}>
							<h3>Fullstack Engineer</h3>
							<img src={require('../../../images/new/coding.png')} style={{ height: 200, marginTop: 20 }}></img>
						</div>
					</div>


					<div className="AboutMe">
						<h2>About.me</h2>
						<p>
							Likes to stay Object oriented asynchronously, mostly writes in nodeJS and builds scalable software stuff for mobile and web
						<br></br>Likes to experiment and implement quickly and  ♥ Open-Source
						<br></br>Spends most of the time in front of laptop ,coding or watching silicon valley , weekends are for watching football
					</p>


						<h2 style={{ marginTop: 30 }}> Present</h2>
						<div>
							<ul>
								<li>
									<p style={{ marginTop: 30 }}>Building/training/Scaling  bots as a Full-Stack Engineer @ <span>techforce.ai </span></p>
									<div style={{ padding: 5, }} className="Jobdescription">
										<ul>
											<li>
												<p style={{ textDecoration: "italics", margin: 0, fontSize: 14 }}><i>Created SaaS platform for training of NLP data for bots & Designed infrastructure for the same</i></p>
											</li>
											<li>
												<p style={{ textDecoration: "italics", margin: 0, fontSize: 14 }}><i>Built Chat interface for bots , bundled up list of custom widgets .</i></p>
											</li>
											<li>
												<p style={{ textDecoration: "italics", margin: 0, fontSize: 14 }}><i>Built teacher-student collaboration platform from scratch with integrated bot (for <span>OECD.org</span>) </i></p>
											</li>
										</ul>
									</div>
								</li>
								<li>
									<p style={{ marginTop: 30 }}>Creator / Fullstack Engineer @ <span>tocstack </span></p>
									<div style={{ padding: 5, }} className="Jobdescription">
										<ul>
											<li>
												<p style={{ textDecoration: "italics", margin: 0, fontSize: 14 }}><i>Created Platform as service (PaaS) for fast application deployment using git.<br></br>
													tocstack lets developers deploy api/services using git and makes it easily accessible through linked subdomain.</i></p>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>


						<h2 style={{ marginTop: 30 }}>Formerly</h2>
						<div>
							<ul>
								<li>
									<p style={{ marginTop: 30 }}>Fullstack Developer @ <span>binarynumbers.io</span></p>
									<div style={{ padding: 5, }} className="Jobdescription">
										<ul>
											<li>
												<p style={{ textDecoration: "italics", margin: 0, fontSize: 14 }}><i>Leads Managment System for <span>Damac Properties-Dubai</span><br></br>
													Implemented backend to collect/filter/manage marketing data from hubspot & facebook  <br></br> & dynamically synced with salesforce. Improved success rate and optimized code-base</i></p>
											</li>

											<li>
												<p style={{ textDecoration: "italics", margin: 0, fontSize: 14 }}><i><span>CMS/Website builder for Damac Properties-Dubai</span><br></br>
													Created backend to dynamically create landing pages/accelerated- mobile-pages  and created <br></br> REST api for dynamic content mapping based on business-rules</i></p>
											</li>

											<li>
												<p style={{ textDecoration: "italics", margin: 0, fontSize: 14 }}><i><span>boupon</span><br></br>
													Created ecommerce platform from mobile recharge and coupons from scratch and single page vueJS application for frontend</i></p>
											</li>

										</ul>
									</div>
								</li>
							</ul>
						</div>





						<h2 style={{ marginTop: 30 }}>Developer Portfolio</h2>
						<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: 300, marginTop: 20 }}>
							<a href="https://github.com/sjljrvis" target="_blank"><img src={require('../../../images/icons/github.png')}></img></a>
							<a href="https://www.npmjs.com/~sjljarvis" target="_blank"><img src={require('../../../images/icons/npm.png')}></img></a>
							<a href="https://angel.co/sejal-chougule" target="_blank"><img src={require('../../../images/icons/angellist.png')}></img></a>
						</div>


						<h2 style={{ marginTop: 30 }}> Social Presence</h2>
						<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: 300, marginTop: 20 }}>
							<img src={require('../../../images/icons/facebook.png')}></img>
							<img src={require('../../../images/icons/linkedin.png')}></img>
							<img src={require('../../../images/icons/quora.png')}></img>
						</div>
					</div>

				</div>
			</div>
		)
	}
}

export default Home