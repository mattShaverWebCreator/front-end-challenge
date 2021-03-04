import React, {useState} from 'react';

import useFetch from "../../hooks/useFetch";
import { Formik, Field, Form } from 'formik';
import { Product } from './products.styles.jsx';
import './products.styles.scss';


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


function Products()  {

    const res = useFetch("https://5f993a3050d84900163b845a.mockapi.io/eriks/products/all");
      
    if (!res.response ) { 
      return <div>Loading...</div>
    }

    {/* Turning the response into an Array */}
    const responseArray  = JSON.parse(JSON.stringify(res)
    )
    {/* Storing the products for access */}
    const products = responseArray.response.products

    return (
           products.map((product,key) =>
                <Product className="product" key={key}>
                    <img src={product.productImage} />
                    <h3>{product.Toepassing}</h3>
                    <div className="product__price">
                        <span>{product.salePrice}</span>
                        <span className="grey">per stuk / excl. btw</span>
                    </div>
                    <div className="product__properties">
                        <div className="product__properties--property">
                            <img src={product["badges"]} />
                        </div>
                        <div className="product__properties--property">
                            {product.Materiaal}
                        </div>
                        <div className="product__properties--property">
                            {product.Hardheid}
                        </div>
                        <div className="product__properties--property"> 
                            {product["Inwendige diameter"]}
                        </div>
                        <div className="product__properties--property">
                            {product.Snoerdikte}
                        </div>
                        <div className="product__properties--property">
                            {product.Kleur}
                        </div>
                        <div className="product__properties--property">
                            {product.Compound}
                        </div>
                        <div className="product__properties--property">
                            {product.Toepassing}
                        </div>
                        <div className="product__properties--property">
                            {product.Handelsnaam}
                        </div>
                        <div className="product__properties--property">
                            {product["Seals volgen norm"]}
                        </div>
                        <div className="product__properties--property">
                            {product.Temperatuurgebied}
                        </div>
                    </div>
                </Product>
           )

    );  
}

export default Products