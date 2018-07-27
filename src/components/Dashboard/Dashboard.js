import React, {Component} from 'react';
import axios from 'axios'
import Products from '../Products/Products'

export default class Dashboard extends Component {

    deleteItem = (id) => {
        axios.delete(`/api/inventory/${id}`).then(res => {
            console.log("deleted item", res.data)
            this.props.allProduct()
        })
    }

    render(){
    const productList = this.props.inventory.map((product, index)=>{
        return <Products key={index} product={product} delete={this.deleteItem}/>
    })



    return(
        <div className ="eachProduct">
        {productList}
        </div>
    )
}
}