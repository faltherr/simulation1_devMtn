import React, {Component} from 'react';
import axios from 'axios'
import Products from '../Products/Products'

export default class Dashboard extends Component {

    deleteItem = (id) =>{
        axios.delete(`/api/inventory/${id}`).then(res =>{        
            console.log("deleted item")
            this.props.allProduct()
        })
    }

    render (){
        let inventoryList = this.props.inventory.map((item, index) => {
            return(
            <div key={index}>
            <Products deleteFn = {this.props.deleteItem}/>
            <p >{item.name}</p>
            <p >{item.price}</p>
            <img src={item.imgurl} alt="" />
            <button>Delete</button>
            <button>Edit</button>
            </div>
            )
        })
        return(
            <div>
                Dashboard
                {inventoryList}
            </div>
        )
    }
}