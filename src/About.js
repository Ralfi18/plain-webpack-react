import React, { Component } from "react";
import withStyles from 'react-jss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const styles = {}

class About extends Component {
	constructor(props){
		super(props);
	}
	render() {
		const { match } = this.props;
		const { params } = match;
		return(
			<div >
				<h1>About  { params && params.id ? "#"+params.id : "" } </h1>
			</div>
		);
	}
}

export default withStyles(styles)(About);
