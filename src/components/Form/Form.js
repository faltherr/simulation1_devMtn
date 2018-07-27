import React, {Component} from 'react';

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
    handleClickCancel = () => {
        this.setState({
            name: "",
            price: 0,
            imgurl: ''
        })
    }

    render (){
        return(
            <div>
                <input placeholder="Image URL" value={this.state.imgurl} onChange ={this.handleChangeImg} ></input>
                <input placeholder="Name" value={this.state.name} onChange={this.handleChangeName}></input>
                <input value={this.state.price} onChange={this.handleChangePrice}></input>
                <button onClick={this.handleClickCancel}>Cancel</button>
                <button>Add to Inventory</button>

            </div>
        )
    }
}