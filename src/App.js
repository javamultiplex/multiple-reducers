import React from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="col">
          <div>
            <span>A:</span><span>{this.props.a}</span>
          </div>
          <button onClick={() => this.props.onUpdateA(this.props.b)}>Update A</button>
        </div>
        <div className="col">
          <div>
            <span>B:</span><span>{this.props.b}</span>
          </div>
          <button onClick={() => this.props.onUpdateB(this.props.a)}>Update B</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    a: state.rA.a,
    b: state.rB.b
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateA: (b) => dispatch({ type: 'UPDATE_A', b: b }),
    onUpdateB: (a) => dispatch({ type: 'UPDATE_B', a: a })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
