import React, { Component } from "react";
import withStyles from 'react-jss'
import { NavLink } from "react-router-dom";

const styles = {
	nav: {
		"padding": "0px",
		"margin": "0px",
		// "text-align": "right",
		"background": "#444",
		"& li": {
			"list-style": "none",
			"display": "inline-block",
			"& a": {
			
				"color": "#FFF",
				"display": "inline-block",
				"padding": "10px 25px",
				"transition": "0.3s",
				"&:hover": {
					"background": "#555"
				}
			}
		}
	}
}

class Nav extends Component {
	render() {
		return(
			<React.Fragment>
				<ul className={this.props.classes.nav}>
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/about/10">About 10</NavLink></li>
				</ul>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(Nav);
