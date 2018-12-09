import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import Home from './Home'
import Skills from './Skills'
import Lab from './Lab'
import Hire from './Hire'
import Resume from './Resume'

class Screens extends Component {

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

				

				<Switch>

					<Route exact path="/" component={Home} />
					<Route exact path="/skills" component={Skills} />
					<Route exact path="/lab" component={Lab} />
					<Route exact path="/hire" component={Hire} />
					<Route exact path="/resume" component={Resume} />

				</Switch>


				<div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", margin: "20px 0px", alignItems: "flex-end" }}>
					<p>mail me @ <span>sjlchougule@gmail.com</span></p>
					<img src={require('../../images/icons/androidify-1495130666222.gif')} style={{ width: 75, height: 75 }}></img>
				</div>
				<div className="Footer">
					<h4>hosted with ♥ on Github</h4>
					<p style={{ fontSize: 13, marginTop: 10 }}>Developed and Maintained by <span>Sejal Chougule</span></p>
				</div>

			</div>
		)
	}
}

export default Screens