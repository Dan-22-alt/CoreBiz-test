import React, { useEffect } from "react";
import ProductStars from "./ProductStars";


const ProductSumary = (props) => {


    useEffect(() => {
        if (localStorage.getItem('cart')) {
            let cart = localStorage.getItem('cart')
            props.setItemsCart(cart)
        }
    }, [])

    function addToCart() {
        let cart2 = props.itemsCart
        cart2++
        localStorage.setItem('cart', cart2)
        props.setItemsCart(cart2)
    }

    function cuotas() {
        if (props.producto?.installments.length != 0) {
            return <p className="product-text product-list-price">ou em {props.producto?.installments[0]?.quantity}x de R${props.producto?.installments[0]?.value}</p>
        } else {
            return <div className="price-null" />
        }
    }

    function isOff() {
        if (props.producto?.listPrice != null) {
            return <div className="product-card">
                <div className="cucard-off"><p className="cucard-label">OFF</p></div>
                <img className="product-image" src={props.producto?.imageUrl} alt="" />
                <p className="product-text product-name">{props.producto?.productName}</p>
                <ProductStars stars={props.producto?.stars} />
                <p className="product-text product-list-price">${props.producto?.listPrice}</p>
                <p className="product-text product-list">por ${props.producto?.price}</p>
                {cuotas()}
                <button className="button-buy" onClick={() => addToCart()}>COMPRAR</button>
            </div>
        } else {
            return <div className="product-card">
                <img className="product-image" src={props.producto?.imageUrl} alt="" />
                <p className="product-text product-name">{props.producto?.productName}</p>
                <ProductStars stars={props.producto?.stars} />
                <p className="product-text product-list-price">$400.00</p>
                <p className="product-text product-list">por ${props.producto?.price}</p>
                {cuotas()}
                <button className="button-buy" onClick={() => addToCart()}>COMPRAR</button>
            </div>
        }
    }

    return (
        <>
            {isOff()}
        </>
    )
}

export default ProductSumary;