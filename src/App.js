import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
// import "./main.css"
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory : []
    }
  }

  componentDidMount(){
  axios.get('http://localhost:3009/api/inventory').then( res => {
    console.log("GET Hit", res)
    this.setState({
      inventory: res.data
    })
  })
  }








  

  render() {
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="mainBody">
          <div className="dashboard">
            <Dashboard inventory={this.state.inventory} />
          </div>
          <div className="form">
            <Form />
          </div>
        </div>
      </div >
    );
  }
}

export default App;
