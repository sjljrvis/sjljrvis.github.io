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
					<h5 style={{ borderBottom: "3px solid #ed573d", paddingBottom: 5 }} onClick={() => this.props.history.push('/')}>About</h5>
					<h5 onClick={() => this.props.history.push('/skills')}>Skills</h5>
					<h5 onClick={() => this.props.history.push('/lab')}>Lab</h5>
					<h5 onClick={() => this.props.history.push('/resume')}>Resume</h5>
					{/* <h5 onClick={() => this.props.history.push('/hire')}>Hire</h5> */}
				</div>


				<div className="Home">
					<div className="banner">
						<h1>Sejal Chougule</h1>
						<div style={{ marginTop: 15 }}>
							<h5> ENGINEER &nbsp;|&nbsp; PRODUCT &nbsp;|&nbsp; CREATOR </h5>
							{/* <h3>Fullstack Engineer @Browserstack</h3> */}
							{/* <img src={require('../../../images/new/coding.png')} style={{ height: 200, marginTop: 20 }}></img> */}
						</div>
					</div>


					<div className="AboutMe">
						<p>
							Hi &#128075;&#127996; I'm sejal, <br />
							This site is a partial collection of projects I’ve worked on, stories I’ve written down, software I’ve published.<br />
						  I like to build scalable software stuff for mobile and web  , ♥ Open-Source & like to experiment and impliment new stuff from scratch.<br />
							<span>Fullstack Engineer</span> with strong hold on nodeJS, golang, react & RoR.
					</p>

						<div className="timeline">
							<div className="timeline-item">
								<div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
									<img src={require('../../../images/icons/browserstack-logo.png')} style={{ width: 30, height: 30, marginRight: 5 }} />
									<h4>Browserstack</h4>
								</div>
								<h5 style={{ textAlign: 'center', fontFamily: "Roboto Condensed", marginTop: 5 }}> Fullstack Engineer , June 2019 - Present</h5>
								<ul style={{ listStyleType: 'none' }}>
									<li> I have been working with growth & monetization team , implemented various A/B experiments to ensure growth for Live & Automate Product.</li>
									<li> Revamped Unit / Functional Testing process & architecture ,which in turn helped reduce unit test execution time from ~21 mins to ~4 mins.</li>
								</ul>
							</div>


							<div className="timeline-item">
								<div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
									<img src={require('../../../images/icons/techforce-logo.png')} style={{ width: 30, height: 30, marginRight: 5 }} />
									<h4>techforce.ai</h4>
								</div>
								<h5 style={{ textAlign: 'center', fontFamily: "Roboto Condensed", marginTop: 5 }}> Product Engineer , March 2018 - June 2019</h5>
								<ul style={{ listStyleType: 'none' }}>
									<li> Created Platform to train NLP intent classification data , which helped team & customers manage & monitor NLP data under one hood.</li>
									<li> Designed & implemented architecture to train NLP engine in dockerized and distributed manner.</li>
									<li> Built pluggable chat interface for bots , with bunch of custom widgets.</li>
								</ul>
							</div>

							<div className="timeline-item">
								<div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
									<h4>binarynumbers.io</h4>
								</div>
								<h5 style={{ textAlign: 'center', fontFamily: "Roboto Condensed", marginTop: 5 }}> Fullstack Developer ,  May 2017 - Feb 2018</h5>
								<ul style={{ listStyleType: 'none' }}>
									<li>Leads Managment System for <span>Damac</span></li>
									<li> CMS/Website builder for Damac Properties-Dubai
									Created backend to dynamically create landing pages/accelerated- mobile-pages and created
									REST api for dynamic content mapping based on business-rules.</li>
								</ul>
							</div>

						</div>

						{/* 
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
						</div> */}
					</div>

				</div>
			</div>
		)
	}
}

export default Home