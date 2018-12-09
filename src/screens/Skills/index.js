import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class Skills extends Component {

	constructor(props) {
		super(props);
		this.state = {
			skills: [
				"nodeJS", "golang", "react", "react-native", "vueJS", "docker", "RASA-NLU", "mongoDB", "EFK stack", "rabbitMQ", "AWS", "nGINX", "git"
			]
		}
	}

	componentDidMount() {

	}

	render() {
		let { skills } = this.state;
		return (
			<div>
				<div className="Header">
					<div>
						<h2>sejal</h2>
					</div>
				</div>

				<div className="Navigation">
					<h5 onClick={() => this.props.history.push('/')}>About</h5>
					<h5 style={{ borderBottom: "3px solid #9253d1", paddingBottom: 5 }} onClick={() => this.props.history.push('/skill')}>Skills</h5>
					<h5 onClick={() => this.props.history.push('/lab')}>Lab</h5>
					<h5 onClick={() => this.props.history.push('/resume')}>Resume</h5>
					<h5 onClick={() => this.props.history.push('/hire')}>Hire</h5>

				</div>
				<div className="Skills">
					<div className="banner">
						<img src={require('../../../images/new/skill.png')} style={{ height: 200, marginTop: 20 }}></img>
					</div>



					<div className="Info">
						<h2>Skills.me</h2>

						<h3 style={{ marginTop: 40 }}>Stack & Tools</h3>
						<div className="CardContainer">
							{
								skills.map((skill, index) => {
									return (
										<div className="Card" key={index}>
											{skill}
										</div>
									)
								})
							}
						</div>

						<h3 style={{ marginTop: 40 }}>Education</h3>
						<p style={{textAlign : "center"}}>Bachelor in Electronics and Telecommunication Engineering <br></br>
							University of Pune , India ,2012 - 2016</p>

					</div>


					

				</div>
			</div>
		)
	}
}

export default Skills