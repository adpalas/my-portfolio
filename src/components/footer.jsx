import React, { Component } from 'react';
import '../stylesheets/footer.css';

class Footer extends Component {
	render() {
		return (
			<div id="Footer">
				<div className="container h-100 pt-5 d-flex flex-column align-items-center">
					<div className="Footer-links d-flex justify-content-center">
						<div className="Footer-link-container d-flex justify-content-center align-items-center">
							<a href="https://github.com/adpalas"><i class="fab fa-github"></i></a>
						</div>
						<div className="Footer-link-container d-flex justify-content-center align-items-center">
							<a href="https://www.linkedin.com/in/aaron-palas-646511126/"><i class="fab fa-linkedin"></i></a>
						</div>
					</div>
					<div className="Footer-horizontal-border w-75 my-3 border rounded"></div>
					<div className="Footer-contact-info d-flex justify-content-center">
						<div className="d-flex">
							<div className="contact-info-icon d-flex align-items-center mr-2">
								<i class="fas fa-thumbtack"></i>
							</div>
							<p className="mb-0">Long Beach, California</p>
						</div>
						<div className="Footer-vertical-border mx-5 border rounded">
						</div>
						<div className="d-flex">
							<div className="contact-info-icon d-flex align-items-center mr-2">
								<i class="far fa-envelope"></i>
							</div>
							<p className="mb-0">aaron.palas@gmail.com</p>
						</div>
						<div className="Footer-vertical-border mx-5 border rounded">
						</div>
						<div className="d-flex">
							<div className="contact-info-icon d-flex align-items-center mr-2">
								<i class="fas fa-phone"></i>
							</div>
							<p className="mb-0">(707) 592-8027</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer;