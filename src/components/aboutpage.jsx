import React, { Component } from 'react';
import '../stylesheets/aboutpage.css';

class Aboutpage extends Component {
	render() {
		return (
			<div id="Aboutpage" className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
				<div className="Aboutpage-description container min-vw-80 min-vh-25 my-5 border rounded">
					<h3 className="my-1">Hello! My name is <span className="Aboutpage-highlight">Aaron</span>.</h3>
					<p>
						I'm 27 years old and currently living in California. I graduated with a Bachelors degree in Computer Science and I currently work in Application Support.
						<br></br>
						<br></br>
						Out of all the fields I studied in school, the topics in web technologies would always grab my attention the most. Now I enjoy building full-stack web applications on my spare time!
						<br></br>
						<br></br>
						I also love to watch movies, play video games, and spend time with my dog Alie.
					</p>
				</div>
				<div className="Aboutpage-content container">
					<h5>Here's what I've been working on...</h5>
					<div className="card my-3 border-0">
					  <div className="row no-gutters">
						<div className="col-sm-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
							<div className="d-flex justify-content-center align-items-center">
								<h5 className="card-main-header card-title mb-0"><i className="fas fa-film"></i> IWIL</h5>
							</div>
							<div className="card-link-containe py-0 d-flex align-items-center">
								<div className="card-link-container-website h-100 d-flex justify-content-center align-items-center">
									<a href="https://iwil.herokuapp.com/" className="card-link-website card-link">Go to Website</a>
								</div>
								<div className="Aboutpage-vertical-border mx-3 border rounded">
								</div>
								<div className="card-link-container-github h-100 d-flex justify-content-center align-items-center">
									<a href="https://github.com/adpalas/iwil" className="card-link-github card-link align-middle"><i className="fab fa-github"></i></a>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-8">
							<div className="card-body">
								<h5 className="card-title">IWIL - I'll Watch It Later</h5>
								<p className="card-text">A web application that utilizes web api to retrieve movie details and whether they are availble on streaming and/or web store plaforms. Successful searches can be selected and saved to a watchlist if desired.</p>
								  <p className="card-text">Stack: JavaScript / Node.js / Express / MongoDB</p>
								<p className="card-text">Date: May 2020</p>
							</div>
						</div>
					  </div>
					</div>
				</div>
			</div>
		)
	}
}

export default Aboutpage;