import React, { Component } from 'react';
import Slider from "react-slick";
import { Route, Switch } from 'react-router-dom';


var settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};

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
					<h5 style={{ borderBottom: "3px solid #9253d1", paddingBottom: 5 }} onClick={() => this.props.history.push('/lab')}>Lab</h5>
					<h5 onClick={() => this.props.history.push('/resume')}>Resume</h5>
					<h5 onClick={() => this.props.history.push('/hire')}>Hire</h5>

				</div>

				<div className="Lab">
					<div className="banner">
						<img src={require('../../../images/new/scientist.png')} style={{ height: 200, marginTop: 20 }}></img>
					</div>



					<div className="Projects">
						<h2>Projects.me</h2>
						<h3 style={{ fontWeight: "lighter", marginTop: 30 }}>A selected list of projects that I have contributed to or have made. Many more can be found out over at my Github profile.</h3>
						<div style={{ width: "75%", marginTop: 30 }}>
							<h3> <strong>Index</strong></h3>
							<ol>
								<li><a style={{ fontSize: 20 }}>tocstack PaaS</a></li>
								<li><a style={{ fontSize: 20 }}>tocstack CLI</a></li>
								<li><a style={{ fontSize: 20 }}>bigNano</a></li>
							</ol>

							<hr style={{ width: "60%", color: "#e2e2e2" }}></hr>

							<div style={{ margin: "20px 0px" }}>
								<h3>tocstack PaaS</h3>

								<div style={{ padding: 5 }}>
									<Slider {...settings} >
										<div >
											<img className="project-slider" src={require('../../../images/projects/tocstack-1.png')} style={{ width: "75%", height: "75%", objectFit: "contain", margin: "10px auto" }} />
										</div>

										<div>
											<img className="project-slider" src={require('../../../images/projects/tocstack-2.png')} style={{ width: "75%", height: "75%", objectFit: "contain", margin: "10px auto" }} />
										</div>


										<div>
											<img className="project-slider" src={require('../../../images/projects/demo3.png')} style={{ width: "75%", height: "75%", objectFit: "contain", margin: "10px auto" }} />
										</div>
									</Slider>

									<p>
										tocstack is Cloud Platform as a Service for fast application deployment using git. It helps developers to seamlessly create, manage and deploy web applications,microservices,REST api etc.App created on tocstack is directly linked to a subdomain hello.tocstack.com. Fork
									</p>
									<p><strong> &lt;/&gt;Technology stacks used :-</strong> nodeJS, mongoDB, vueJs, docker nGinx, Digital Ocean</p>
								</div>
							</div>




							<hr style={{ width: "60%", color: "#e2e2e2" }}></hr>

							<div style={{ margin: "20px 0px" }}>
								<h3>tocstack CLI</h3>

								<div style={{ padding: 5 }}>
									<Slider {...settings} >
										<div >
											<img className="project-slider" src={require('../../../images/projects/cli1.png')} style={{ width: "75%", height: "75%", objectFit: "contain", margin: "10px auto" }} />
										</div>

										<div>
											<img className="project-slider" src={require('../../../images/projects/cli2.png')} style={{ width: "75%", height: "75%", objectFit: "contain", margin: "10px auto" }} />
										</div>
									</Slider>

									<p>
										tocstack is Cloud Platform as a Service for fast application deployment using git. It helps developers to seamlessly create, manage and deploy web applications,microservices,REST api etc.App created on tocstack is directly linked to a subdomain hello.tocstack.com. Fork
									</p>
									<p><strong> &lt;/&gt;Technology stacks used :-</strong> nodeJS, mongoDB, commander</p>
								</div>
							</div>


							<hr style={{ width: "60%", color: "#e2e2e2" }}></hr>

	<div style={{ margin: "20px 0px" }}>
							<h3>tocstack CLI</h3>

							<div style={{ padding: 5 }}>
								<pre>
									<code>{
										`
	 const bignano = require('bignano');
   const settings = {
			autoScale: true,
			port: process.env.PORT || 3000,
			mongoDB: {
				databaseName: "dbName",
				userName: "userName",
				password: "password",
				host: "ds121212.mlab.com",
				port: "1234",
			},
			middlewares: [],
			models: [{ name: "name", schema: require('./schema') }],
			routes: [{path: '/', model: "name", methods: ["GET", "PUT","POST", "DELETE"], autoGenerate: true }],
			fileStorage: {s3Token: ""  /* You need to be tocstack user to access fileStorage */}	
		};
				
		global.server = new bignano(settings);
				
		server.init();
		const app = server.getAppInstance();
		server.fileStorage('/home/sejal/Personal/node_js/sjljs/index.js', (response) =&gt; {
		console.log(response);
		});
			`
									}

									</code>
								</pre>
								<p>
									bignano is generic CRUD api package , simple intialization sets up CRUD api endpoint and also supports file storage service intergrated with tocstack - Cloud Platform as a Service for fast application deployment using git. Fork
									</p>
							</div>
							</div>

						</div>

					</div>
				</div>

			</div>
			
		)
	}
}

export default Lab