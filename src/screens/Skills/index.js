import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class Skills extends Component {

	constructor(props) {
		super(props);
		this.state = {
			languages: ["nodeJS", "golang", "ruby", "shell-script"],
			frameworks: ["react", "react-native", "ruby on rails"],
			tools: ["mongo","redis","mysql","aws","gcp","nginx","docker"],
			tool: [
				"nodeJS", "golang", "react", "react-native", "vueJS", "docker", "RASA-NLU", "mongoDB", "EFK stack", "rabbitMQ", "AWS", "nGINX", "CI/CD", "git"
			]
		}
	}

	componentDidMount() {

	}

	render() {
		let { tools, languages, frameworks } = this.state;
		return (
			<div>
				<div className="Header">
					<div>
						<h2>sejal</h2>
					</div>
				</div>

				<div className="Navigation">
					<h5 onClick={() => this.props.history.push('/')}>About</h5>
					<h5 style={{ borderBottom: "3px solid #ed573d", paddingBottom: 5 }} onClick={() => this.props.history.push('/skill')}>Skills</h5>
					<h5 onClick={() => this.props.history.push('/lab')}>Lab</h5>
					<h5 onClick={() => this.props.history.push('/resume')}>Resume</h5>
					<h5 onClick={() => this.props.history.push('/hire')}>Hire</h5>

				</div>
				<div className="Skills">
					<div className="Info">
						<h2>Skills.me</h2>
						<p>Programming Languages, Frameworks, Tools & Products that I work with</p>

						<h3 style={{ marginTop: 40 }}>Programming Languages</h3>
						<div className="CardContainer">
							{
								languages.map((skill, index) => {
									return (
										<div className="Card" key={index}>
											<img src={require(`../../../images/icons/${skill}.png`)} style={{ width: 30, height: 30 }}></img>
											{skill}
										</div>
									)
								})
							}
						</div>

						<h3 style={{ marginTop: 40 }}>Frameworks</h3>
						<div className="CardContainer">
							{
								frameworks.map((skill, index) => {
									return (
										<div className="Card" key={index}>
											<img src={require(`../../../images/icons/${skill}.png`)} style={{ width: 30, height: 30 }}></img>
											{skill}
										</div>
									)
								})
							}
						</div>

						<h3 style={{ marginTop: 40 }}>Tools</h3>
						<div className="CardContainer">
							{
								tools.map((skill, index) => {
									return (
										<div className="Card" key={index}>
											<img src={require(`../../../images/icons/${skill}.png`)} style={{ width: 30, height: 30 }}></img>
											{skill}
										</div>
									)
								})
							}
						</div>


						<h3 style={{ marginTop: 40 }}>Education</h3>
						<p style={{ textAlign: "center" }}>Bachelor in Electronics and Telecommunication Engineering <br></br>
							University of Pune , India ,2012 - 2016</p>

					</div>




				</div>
			</div>
		)
	}
}

export default Skills