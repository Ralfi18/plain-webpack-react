import React, { Component } from "react";

import withStyles from 'react-jss'
import { NavLink } from "react-router-dom";
// import "./App.css";
const styles = {}
// --------------------------
class Nav extends Component {
	render() {
		return(
			<div >
				<NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
			</div>
		);
	}
}

export default withStyles(styles)(Nav);
