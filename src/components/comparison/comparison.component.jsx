import React, {useState} from 'react';

import useFetch from "../../hooks/useFetch";
import Products from '../products/products.component.jsx';
import { Formik, Field, Form } from 'formik';
import './comparison.styles.scss';

import { 
    ComparisonSelection,
    ComparisonSelectionTitle,
    ComparisonSelectionDescriberTitle,
    ComparisonQuantity,
    ComparisonQuantityTitle,
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
                            <ComparisonSelectionTitle>Je selectie</ComparisonSelectionTitle> 
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
                    <ComparisonSelectionDescriber>
                        <ComparisonSelectionDescriberTitle>Keurmerk</ComparisonSelectionDescriberTitle>
                        <ComparisonSelectionDescriberTitle>Materiaal</ComparisonSelectionDescriberTitle>
                        <ComparisonSelectionDescriberTitle>Inwendige diameter(mm)</ComparisonSelectionDescriberTitle>
                        <ComparisonSelectionDescriberTitle>Snoerdikte(mm)</ComparisonSelectionDescriberTitle>
                        <ComparisonSelectionDescriberTitle>Internationale maataanduiding</ComparisonSelectionDescriberTitle>
                        <ComparisonSelectionDescriberTitle>Kleur</ComparisonSelectionDescriberTitle>
                        <ComparisonSelectionDescriberTitle>Compound</ComparisonSelectionDescriberTitle>
                        <ComparisonSelectionDescriberTitle>Toepassing</ComparisonSelectionDescriberTitle>
                        <ComparisonSelectionDescriberTitle>HandelsnaamM</ComparisonSelectionDescriberTitle>
                        <ComparisonSelectionDescriberTitle>Seal volgens norm</ComparisonSelectionDescriberTitle>
                        <ComparisonSelectionDescriberTitle>Temperatuuregebied(C)</ComparisonSelectionDescriberTitle>
                        <ComparisonSelectionDescriberTitle>Keurmerk</ComparisonSelectionDescriberTitle>
                        <ComparisonSelectionDescriberTitle>Materiaal</ComparisonSelectionDescriberTitle>
                        <ComparisonSelectionDescriberTitle>Hardheld</ComparisonSelectionDescriberTitle>
                        <ComparisonSelectionDescriberTitle>Inwendisge diameter(mm)</ComparisonSelectionDescriberTitle>
                        <ComparisonSelectionDescriberTitle>Snoerdikte(mm)</ComparisonSelectionDescriberTitle>
                        <ComparisonSelectionDescriberTitle> Internationale maataanduiding</ComparisonSelectionDescriberTitle>
                    </ComparisonSelectionDescriber>
            </ComparisonSelection>
            <ComparisonProducts>
                <Products />
            </ComparisonProducts>
        </ComparisonContainer>
    )
}

export default Comparison 


