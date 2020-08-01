import React, { Component } from 'react'; // import is the newer es2015 method of node's require() call
import logo from './logo.svg';
import './App.css';

function returnName(name) {
	return name;
}

class Person extends Component {
	render() {
		let phrase;
		console.log(this.props); // Immutable in this scope
		phrase = this.props.stringOne + " " + this.props.stringTwo;
		
		return (
			<h1>{phrase}! My name is {returnName("Aaron")}! I am {this.props.num} years old.</h1>
		);
	}
}

class Dog extends Component {
	static defaultProps = {
		name: "Ace",
		breed: "rat terrier",
		color: "white/brown"
	} // Can use this when props are not specified 
	
	render() {
		let { name, breed, color } = this.props;
		
		return <h1>My dog {name} is a {color} {breed}.</h1>
	}
}

class ToDoList extends Component {
	render() {
		let { list } = this.props;
		
		return(
			<div>
				<h1 style={{textDecoration: "underline", fontSize: "50px"}}>My Todo List</h1> {/* style attributes */}
				<ul>
					{list.map(todo => <li>{todo}</li>)} {/* Looping elements */}
				</ul>
			</div>
		)
	}
}


{/* function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Hey all you people!
				</p>
				<a
				  className="App-link"
				  href="https://reactjs.org"
				  target="_blank"
				  rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div> 
	);
} */}

class App extends Component {
	render() {
		return(
			<div className="App">
				<Person stringOne="Hello" stringTwo="World" num={26} />
				<br></br>
				<Dog name="Alie" breed="chihuahua mutt" color="white/brown" />
				<br></br>
				<ToDoList 
					list={["Learn React", "Build a Web Portfolio", "Get Interview-Ready"]}
				/>
				<br></br>
				<Dog />
			</div>
		);
	}
}

export default App;
