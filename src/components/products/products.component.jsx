import React, {useState} from 'react';

import useFetch from "../../hooks/useFetch";
import { Formik, Field, Form } from 'formik';


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
                <div key={key}>
                    <img src={product.productImage} />
                    <h3>{product.Toepassing}</h3>
                    <div>
                        <img src={product.badges.match(/^(\S+)\s(.*)/).slice(1)} />
                    </div>
                </div>
           )

    );  
}

export default Products