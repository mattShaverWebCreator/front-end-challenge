import React from 'react';

import useFetch from "./hooks/useFetch";

{/* import Fetch from 'react-fetch';

import Comparison from './components/comparison/comparison.component'; */} 
 

    {/* const [data, setData] = useState([]);

    useEffect(() => {
        console.log('products updated');
    }, [props.products])

    return (
        <Fetch url="https://5f993a3050d84900163b845a.mockapi.io/eriks/products/all" onSuccess={() => setData(props.products)}>
           <Comparison products={useState(data)}>
           </Comparison>
        </Fetch>
    ) */}

const App = () => {

  const { loading, response } = useFetch(
    "https://5f993a3050d84900163b845a.mockapi.io/eriks/products/all"
  );

  const responseArray  = JSON.parse(JSON.stringify(response));

  return (
    <>
      <h2>Get some data</h2>

      {loading ? (
        "Loading..."
      ) : console.log(JSON.parse(JSON.stringify(response)))
         (
           (responseArray).map((product, key) => 
            <li key={key}>
                <div className="product-list-item">
                    <header>{product.Toepassing}</header>
                </div>
            </li>
        )
      ) } 
    </>
  );
};

export default App