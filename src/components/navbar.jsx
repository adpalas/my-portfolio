import React, { Component } from 'react';
import '../stylesheets/navbar.css';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg fixed-top">
				<div id="navbar-header" className="h-100 d-flex align-items-center">
					<div className="mr-2 d-flex align-items-center">
						<i className="fas fa-laptop-code"></i>
					</div>
					<a className="navbar-brand m-0 p-0" href="#Homepage">Aaron Palas</a>
				</div>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<i className="fas fa-bars"></i>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link text-right" href="#Homepage">Home <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-right" href="#Aboutpage">About</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-right" href="#Footer">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar;