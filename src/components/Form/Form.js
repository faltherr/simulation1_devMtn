import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component {
    constructor (){
        super()
        this.state={
            name: "",
            price: 0,
            imgurl: ""
        }
    }

    //Handle the change event for each input field
    handleChangeImg = (e) => {
        this.setState({imgurl: e.target.value})
    }

    handleChangeName = (e) => {

        this.setState({name: e.target.value})
    }

    handleChangePrice = (e) => {
        this.setState({price: e.target.value})
    }

    //Event handler for the cancel button on click
    handleReset = () => {
        this.setState({
            name: "",
            price: 0,
            imgurl: ''
        })
    }

    //Event handler to add a new item to inventory
    handleAddProduct = () => {
        let newProduct = {
            name: this.state.name,
            price: this.state.price,
            imgURL: this.state.imgurl
        }

        axios.post("/api/inventory", newProduct).then(res => {
          console.log("POST Request", res)
          this.props.allProduct()
            this.handleReset()
        })
        }

    render (){
        return(
            <div>
                <input placeholder="Image URL" value={this.state.imgurl} onChange ={this.handleChangeImg} ></input>
                <input placeholder="Name" value={this.state.name} onChange={this.handleChangeName}></input>
                <input value={this.state.price} onChange={this.handleChangePrice}></input>
                <button onClick={this.handleReset}>Cancel</button>
                <button onClick ={this.handleAddProduct}>Add to Inventory</button>
            </div>
        )
    }
}