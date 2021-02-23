import React, {useState, useEffect} from 'react';

import Products from '../products/products.component.jsx';

function Comparison(props) {

    useEffect(() => {
        console.log('products updated');
    }, [props.products])

    return (
        <Products products={useState(props.products)} />
    )
}

export default Comparison 


