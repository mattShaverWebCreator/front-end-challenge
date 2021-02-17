import React from 'react';

import Product from '../product/product.component.jsx';
import Fetch from 'react-fetch';

function Comparison() {
    return (
        <Fetch url="https://5f993a3050d84900163b845a.mockapi.io/eriks/products/all">
            <Product />
        </Fetch>
    )
}

export default Comparison 


