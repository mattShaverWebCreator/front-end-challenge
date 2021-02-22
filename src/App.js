import React, {useEffect, useState} from 'react';
import Fetch from 'react-fetch';

import Comparison from './components/comparison/comparison.component';
 
function App(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('products updated');
    }, [data.products])

    return (
        <Fetch props={props} url="https://5f993a3050d84900163b845a.mockapi.io/eriks/products/all" onSuccess={() => setData(props)}>
           <Comparison products={useState(data)}>
           </Comparison>
        </Fetch>
    )
 
}

export default App  
