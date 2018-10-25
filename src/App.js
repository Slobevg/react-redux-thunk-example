import React, { Component } from 'react';
import { connect } from 'react-redux';
import HelloWorld from './HelloWorld';
import './App.css';
import { googleServiceFetch } from './reducers';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      N: 0
    };
  }

  handleN = (event) => {
    this.setState({N: event.target.value});
  }

  NnotValid = (n) => {
    return n > 5;
  }

  render() {
    const { completed } = this.props;
    const { N } = this.state;
    return (
      <div>
        {
          completed < N || N === 0 ? <p>Loading</p> : <HelloWorld/>
        }
        <div className="row">
          <div className="col-xs-3">
            <div className="input-group">
              <input type="number" className="form-control" placeholder="N" onChange={this.handleN}/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="button" 
                  onClick={this.props.toggleGoogleService} disabled={this.NnotValid(N)}>Google service</button>
              </span>
            </div>
            {
              this.NnotValid(N) && <span className="errors">N should not be more than 5</span>
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    completed: state.googleServiceCompleted
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleGoogleService: () => {
      dispatch(googleServiceFetch());
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
