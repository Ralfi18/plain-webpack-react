import React, { Component } from "react";
import withStyles from 'react-jss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const styles = {

}

class About extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return(
			<div >
				<h1 >About</h1>
			</div>
		);
	}
}

export default withStyles(styles)(About);
