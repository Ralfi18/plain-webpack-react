import React, { Component } from "react";
import {hot} from "react-hot-loader";
import withStyles from 'react-jss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Nav from "./Nav";
// import "./App.css";

const styles = {
	wrapp: {
		color: 'blue',
	}
}

class App extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return(
			<div >
				<Nav />

				<Route exact path="/" component={Home} />
		      	<Route exact path="/about" component={About}  />
		      	<Route exact path="/about/:id" component={About}  />
			</div>
		);
	}
}

export default withStyles(styles)(App);
