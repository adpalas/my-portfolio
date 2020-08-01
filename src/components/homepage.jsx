import React, { Component } from 'react';
import Maingraphic from '../assets/118-macbook-edited.svg';
import '../stylesheets/homepage.css';

class Homepage extends Component {
	render() {
		return (
			<div id="Homepage" className="min-vh-100 d-flex align-items-center">
				<div className="row w-100">
					<div className="Homepage-title col-6 pl-5 d-flex flex-column justify-content-center">
						<h1 className="text-left">Aaron Palas</h1>
						<p className="text-left">Web Developer</p>
					</div>
					<div className="Homepage-graphic col-6"><img src={Maingraphic} alt="Main Graphic" /></div>
				</div>
			</div>
		)
	}
}

export default Homepage;