import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';
import Timer from '../components/Timer';

class App extends React.Component {
  state = { seconds: 15 };

  handleDecrease = () => {
    this.setState(prevState => ({ seconds: prevState.seconds - 1 }));
  };

  handleIncrease = () => {
    this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
  };

  render() {
    return (
      <Timer
        seconds={this.state.seconds}
        onDecrease={this.handleDecrease}
        onIncrease={this.handleIncrease}
      />
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
