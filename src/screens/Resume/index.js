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
					<h5 style={{ borderBottom: "3px solid #ed573d", paddingBottom: 5 }} onClick={() => this.props.history.push('/resume')}>Resume</h5>
					{/* <h5 onClick={() => this.props.history.push('/hire')}>Hire</h5> */}
				</div>
				
				<div className="Skills">
					<div className="banner">
						<img src={require('../../../images/new/curriculum.png')} style={{ height: 200, marginTop: 20 }}></img>
					</div>



					<div className="Info">
						<h2>Resume.me</h2>
						<h3 style={{ marginTop: 40, color: "#ed573d" }}>Below you can find a copy of my resume</h3>
						<object data="http://sejalchougule.me/resume/Sejal_Resume.pdf" type="application/pdf" width="80%" height={600} style={{marginTop:50}}>
							<p>
								<i>It appears you don't have a PDF plugin for this browser.</i>
								<a href="http://sejalchougule.me/resume/Sejal_Resume.pdf">
									click here to download the PDF file.</a></p>
						</object>

					</div>

				</div>
			</div>
		)
	}
}

export default Lab