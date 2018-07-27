import React, { Component } from 'react';
// import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

import "./main.css"
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [],
    }
  }

  // Method to pull data from DB for a render
  // Had to bind this keyword
  // Also this function is passed down to the form component and the dashboard component
  componentDidMount = () => {
    axios.get('/api/inventory').then(res => {
      // console.log("GET Hit", res)
      this.setState({
        inventory: res.data
      })
    })
  }

  render() {
    return (

      <div className="App">
        <div className="fullContainer">
          <div className="header"> <Header /> </div>
          <div className="mainBody">
            <div className="dashboard">
              <Dashboard inventory={this.state.inventory} allProduct={this.componentDidMount} />
            </div>
            <div className="form">
              <Form allProduct={this.componentDidMount} inventory={this.state.inventory} />
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
