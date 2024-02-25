import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {createStore} from 'redux';
import './styles.css';
import {timerReducer, changeSeconds, restart} from './timerReducer.js';
import RoundButton, {RESTART_SIGN} from './components/RoundButton';
import Timer from './components/Timer';
import Sandglass from './components/Sandglass';

// const appStore = ...;

class App extends React.Component {
	state = {seconds: 15};

	handleDecrease = () => {
		this.setState((prevState) => ({seconds: prevState.seconds - 1}));
	};

	handleIncrease = () => {
		this.setState((prevState) => ({seconds: prevState.seconds + 1}));
	};

	render() {
		return (
			<div className="app">
				<Timer seconds={this.state.seconds} onDecrease={this.handleDecrease} onIncrease={this.handleIncrease} />
			</div>
		);
	}
}

App.propTypes = {
	//store: PropTypes.object.isRequired,
};

ReactDom.render(<App />, document.getElementById('app'));
