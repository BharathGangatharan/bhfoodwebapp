import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import products from '../assets/fake-data/products';

const Product = () => {
    const [prd,setPrd] = useState([]);
    const {id} = useParams();


    useEffect(() => {
        const findPrdItm = ()=>{
            const item = products.find((eachItm)=>eachItm.id === id)
            setPrd(item)
        }
        findPrdItm();

    }, [id])

    return (
        <div>
            <h1>Product page</h1>
            {
                prd.map((item)=>{
                    return <h1 style={{marginTop:'10px'}}>{item.title}</h1>
                })
            }
        </div>
    )
}

export default Product;
