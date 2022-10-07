import React, { useEffect, useState } from "react";
import axios from 'axios';
import ProductSummary from "./ProductSummary";
import Carousel from 'react-elastic-carousel';

const SliderProducts = (props) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        axios.get('https://corebiz-test.herokuapp.com/api/v1/products').then(r => {
            setProductos(r.data)
        }).catch(console.log)
    }, [])

    useEffect(() => { console.log(productos) }, [productos])

    const breakPoints = [
        { width: 1, itemsToShow: 2, showArrows: false, pagination: true },
        { width: 550, itemsToShow: 2, showArrows: false, pagination: true },
        { width: 768, itemsToShow: 3, showArrows: false, pagination: true },
        { width: 1200, itemsToShow: 4 },
    ];

    return (
        <div className="slider-products-container">
            <div className="products-title">
                <h2>Más Vendidos</h2>
            </div>
            <div className="slider-products">
                <Carousel breakPoints={breakPoints} pagination={false} disableArrowsOnEnd={false} enableTilt={false}>
                    {
                        productos.map(producto => {
                            return (
                                <ProductSummary producto={producto} itemsCart={props.itemsCart} setItemsCart={props.setItemsCart} key={productos.productId}
                                />
                            )
                        })
                    }
                </Carousel>
            </div>
        </div >
    )
}

export default SliderProducts;