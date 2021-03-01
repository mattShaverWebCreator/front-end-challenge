import React, {useState} from 'react';

import useFetch from "../../hooks/useFetch";
import Products from '../products/products.component.jsx';
import { Formik, Field, Form } from 'formik';

import { 
    ComparisonSelection,
    ComparisonSelectionDescriberTitle,
    ComparisonQuantity,
    ComparisonQuantityTitle,
    span, 
    ComparisonSelectionDescribers, 
    ComparisonSelectionDescriber, 
    ComparisonProducts, 
    ComparisonContainer 
} from './comparison.styles'


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function Comparison() {

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
        <ComparisonContainer>
            <ComparisonQuantity>
                <ComparisonQuantityTitle>{products.length} producten vergelijken</ComparisonQuantityTitle>
            </ComparisonQuantity>
            <ComparisonSelection>
                
            <Formik
                initialValues={{
                toggle: false,
                checked: [],
                }}
                onSubmit={async (values) => {
                    await sleep(500);
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                 {({ values }) => (
                        <Form>
                            <h3>Je selectie</h3> 
                            {/* Should refactor rest of this element 
                            to dynamically generate inputs and toggle product display */}
                            <div role="group" aria-labelledby="checkbox-group">
                                <label>
                                    <Field type="checkbox" name="checked" value="One" />
                                    <span>GATES Eindige tandriem Poly Chain GT carbon 5MGT breedte 15mm lengte 37m</span>
                                </label>
                                <label>
                                    <Field type="checkbox" name="checked" value="Two" />
                                    <span>METABO Boormachine BE 751 + snelspanboorkop</span>
                                </label>
                                <label>
                                    <Field type="checkbox" name="checked" value="Three" />
                                    <span>Oliekeering model 64</span>
                                </label>
                                <label>
                                    <Field type="checkbox" name="checked" value="Four" />
                                    <span>Gates Endinge Poly Chain GT Carbon profiel 5MGT breedte 15mm lengte 37m</span>
                                </label>
                            </div>
                        </Form>
                    )}
                </Formik>
                <ComparisonSelectionDescribers>
                    <ComparisonSelectionDescriber>
                        <ComparisonSelectionDescriberTitle>Keurmerk</ComparisonSelectionDescriberTitle>
                    </ComparisonSelectionDescriber>
                    <ComparisonSelectionDescriber>
                        <ComparisonSelectionDescriberTitle>Materiaal</ComparisonSelectionDescriberTitle>
                    </ComparisonSelectionDescriber>
                    <ComparisonSelectionDescriber>
                        <ComparisonSelectionDescriberTitle>Inwendige diameter(mm)</ComparisonSelectionDescriberTitle>
                    </ComparisonSelectionDescriber>
                    <ComparisonSelectionDescriber>
                        <ComparisonSelectionDescriberTitle>Snoerdikte(mm)</ComparisonSelectionDescriberTitle>
                    </ComparisonSelectionDescriber>
                    <ComparisonSelectionDescriber>
                    <ComparisonSelectionDescriberTitle>Internationale maataanduiding</ComparisonSelectionDescriberTitle>
                    </ComparisonSelectionDescriber>
                    <ComparisonSelectionDescriber>
                        <ComparisonSelectionDescriberTitle>Kleur</ComparisonSelectionDescriberTitle>
                    </ComparisonSelectionDescriber>
                    <ComparisonSelectionDescriber>
                        <ComparisonSelectionDescriberTitle>Compound</ComparisonSelectionDescriberTitle>
                    </ComparisonSelectionDescriber>
                    <ComparisonSelectionDescriber>
                        <ComparisonSelectionDescriberTitle>Toepassing</ComparisonSelectionDescriberTitle>
                    </ComparisonSelectionDescriber>
                    <ComparisonSelectionDescriber>
                    <ComparisonSelectionDescriberTitle>HandelsnaamM</ComparisonSelectionDescriberTitle>
                    </ComparisonSelectionDescriber>
                    <ComparisonSelectionDescriber>
                    <ComparisonSelectionDescriberTitle>Seal volgens norm</ComparisonSelectionDescriberTitle>
                    </ComparisonSelectionDescriber>
                    <ComparisonSelectionDescriber>
                        <ComparisonSelectionDescriberTitle>Temperatuuregebied(C)</ComparisonSelectionDescriberTitle>
                    </ComparisonSelectionDescriber>
                    <ComparisonSelectionDescriber>
                        <ComparisonSelectionDescriberTitle>Keurmerk</ComparisonSelectionDescriberTitle>
                    </ComparisonSelectionDescriber>
                    <ComparisonSelectionDescriber>
                        <ComparisonSelectionDescriberTitle>Materiaal</ComparisonSelectionDescriberTitle>
                    </ComparisonSelectionDescriber>
                   <ComparisonSelectionDescriber>
                        <ComparisonSelectionDescriberTitle>Hardheld</ComparisonSelectionDescriberTitle>
                    </ComparisonSelectionDescriber> 
                    <ComparisonSelectionDescriber> 
                        <ComparisonSelectionDescriberTitle>Inwendisge diameter(mm)</ComparisonSelectionDescriberTitle>
                    </ComparisonSelectionDescriber>
                   <ComparisonSelectionDescriber>
                        <ComparisonSelectionDescriberTitle>Snoerdikte(mm)</ComparisonSelectionDescriberTitle>
                    </ComparisonSelectionDescriber> 
                    <ComparisonSelectionDescriber>
                        <ComparisonSelectionDescriberTitle> Internationale maataanduiding</ComparisonSelectionDescriberTitle>
                    </ComparisonSelectionDescriber>
                </ComparisonSelectionDescribers>
            </ComparisonSelection>
            <ComparisonProducts>
                <Products />
            </ComparisonProducts>
        </ComparisonContainer>
    )
}

export default Comparison 


