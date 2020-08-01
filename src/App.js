import React, { Component } from 'react'; // import is the newer es2015 method of node's require() call
import './App.css';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Aboutpage from './components/aboutpage';
import Footer from './components/footer';

class App extends Component {
	render() {
		return(
			<div className="App">
				<Navbar />
				<Homepage />
				<Aboutpage />
				<Footer />
			</div>
		)
	}
}

export default App;
