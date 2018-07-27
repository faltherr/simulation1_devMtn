import React from 'react';

export default function Products(props) {

    const product = props.product;
    const price = product.price;
    const name = product.name;
    const image = product.imgurl;
    // console.log(product)
    return (

        <div className="productListItem">
            <div className="imageContainer">
                <img src={image} alt="" className="productImage" />
            </div>
            <div className="topBottomSplitProduct">
                <div className="text">
                    <p className="productPrice">{price} </p>
                    <p className="productName">{name}</p>
                </div>
                <div className='buttonContainer'>
                    <button onClick={() => { props.delete(product.id) }} >Delete</button>
                    <button>Edit</button>
                </div>
            </div>
        </div>
    )

}
