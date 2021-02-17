import React, { useState, useEffect } from 'react';

function Product(props)  {

    const [products, updateProducts] = useState([props]); 
    const [runIt, setRunIt] = useState(false);
    console.log(products);

    {/* Updates state values and determines whether products should be ran aka rendered */}
    const updateRunIt = () => {
        setRunIt(true);
    }
    
    {/* Renders products conditionally based on whether data has been fetched */}
    const renderProducts = () => {
        if(runIt === false) {
            return <div><p>Loading...</p></div>
        }
        else {
            return <ul className="products-list">
                {props.products.map((product, key) => {
                    return (
                        <li key={key}>
                            <div className="product-list-item">
                                <header>{product.Toepassing}</header>
                            </div>
                        </li>
                    )})}
            </ul>  
    }}

    {/* Timeout to wait for fetch to go through before rendering products */}
    useEffect(() => {
        setTimeout(() => {
          updateRunIt();
        }, 1000);
          }, []);
    
    return renderProducts(props)

}

export default Product
