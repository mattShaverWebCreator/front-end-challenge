import React, {useEffect} from 'react';

import Products from '../products/products.component.jsx';

function Comparison(data) {

    useEffect(() => {
        console.log('products updated');
    }, [data])

    return (
        <Products products={data} />
    )
}

export default Comparison 


