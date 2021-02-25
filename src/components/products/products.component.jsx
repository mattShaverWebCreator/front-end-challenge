import React, {useState, useEffect} from 'react';

function Products(data)  {

    useEffect(() => {
        console.log('products updated');
    }, [data])

    return (
        (data.products[0]).map((product, key) => 
            <li key={key}>
                <div className="product-list-item">
                    <header>{product.Toepassing}</header>
                </div>
            </li>
        ))
}

export default Products