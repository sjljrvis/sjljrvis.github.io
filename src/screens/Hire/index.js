import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class Lab extends Component {

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
					<h5 onClick={() => this.props.history.push('/')}>About</h5>
					<h5 onClick={() => this.props.history.push('/skills')}>Skills</h5>
					<h5 onClick={() => this.props.history.push('/lab')}>Lab</h5>
					<h5 onClick={() => this.props.history.push('/resume')}>Resume</h5>
					<h5 style={{ borderBottom: "3px solid #ed573d", paddingBottom: 5 }} onClick={() => this.props.history.push('/hire')}>Hire</h5>

				</div>

				<div className="Skills">
					<div className="banner">
						<img src={require('../../../images/new/hire.png')} style={{ height: 200, marginTop: 20 }}></img>
					</div>



					<div className="Info">
						<h2>Hire.me</h2>
						<h3 style={{ marginTop: 40, color: "#ed573d" }}>Intrested in hiring me ?</h3>
						<div style={{ width: "90%" }}>
							<p style={{ marginTop: 20 }}>
								At the moment, I am  available for Full-Time position
						</p>
							<p style={{ marginTop: 20 }}>
								I will be available for Backend/Full-stack/SDE(level-2) position. I have been lucky and grateful to have worked on various projects with small team. It had enabled me to assume various roles within each project which includes Back-end Engineer, Front-end Engineer, Devops Engineer etc. Working in multiple roles (mostly simultaneously), has enabled me to understand different parts of Technology stacks .
						</p>
							<br></br>
							<p>
								Striving to work for exciting start-up.<br></br>
								Preferred roles :- Software developer(Backend/Full-stack)<br></br>
								I lack Designing Skills(UI/UX).But I fill that gap with Bootstrap,Materialize or something similar. Will be working on it in the near future
						</p>

						<p>
							{/* <a style={{margin:"10px 0px"}}>Click</a> here for resume<br></br> */}
							<strong>Contact details</strong>
							<ul>
								<li>Contact no :(+91) 9167708340</li>
								<li>Email : <span>sjlchougule@gmail.com</span></li>								
							</ul>
						</p>
						</div>
					</div>

				</div>
			</div>
		)
	}
}

export default Lab