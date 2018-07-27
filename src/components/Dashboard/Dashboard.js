import React, {Component} from 'react';

export default class Dashboard extends Component {

    render (){
        let inventoryList = this.props.inventory.map((item, index) => {
            return(
            <div key={index}>
            <p >{item.name}</p>
            <p >{item.price}</p>
            <img src={item.imgurl} alt="" />
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