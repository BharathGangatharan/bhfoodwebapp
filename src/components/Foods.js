import React,{useState,useEffect} from 'react';

import FilterFoods from './FilterFoods';
import ProductFind from './ProductFind';

const Foods = (props) => {

    return (
        <div>
            <ProductFind/>
            <FilterFoods />
        </div>
    )
}

export default Foods;
