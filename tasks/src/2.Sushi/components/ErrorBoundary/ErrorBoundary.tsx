import * as React from 'react';
import './ErrorBoundary.css';

export class ErrorBoundary extends React.Component<any, any> {
	constructor(props: unknown) {
		super(props);
		this.state = {error: null, errorInfo: null};
	}

	componentDidCatch(error: unknown, errorInfo: unknown) {
		this.setState({
			error: error,
			errorInfo: errorInfo,
		});
	}

	render() {
		if (this.state.errorInfo) {
			debugger;
			return (
				<div className="errorBoundaryWrapper">
					<h2>Что-то пошло не так...</h2>
					<div className="errorBoundaryMessage">
						{this.state.error && this.state.error.toString()}
						<br />
						{this.state.errorInfo.componentStack}
					</div>
				</div>
			);
		}
		return this.props.children;
	}
}
