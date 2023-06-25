import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import DisplayFood from './DisplayFood';
import Pizza from '../assets/images/pizzzaSearchBg.jpg';

const ProductFind = (props) => {

  const [searchFood,setSearchFood] = useState('');

    return (
      <>
      <div className="SearchFoodContainer">
        <div className="img-blck">
          <img src={Pizza}/>
        </div>
          <Form.Group className="mb-3" className="SearchFoodTag">
            <Form.Control type="text" placeholder="Search Food" value={searchFood} size="lg" onChange={(e)=>{setSearchFood(e.target.value)}} />
          </Form.Group>
      </div>
      <DisplayFood passFood={searchFood}/>
      </>
    );
}

export default ProductFind;