import React,{useState,useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import HeroImage from '../assets/images/hero.png';
import FilteredItemComponent from './FilteredItemComponent';

const FilterFoods = () => {

    const [chooseCtg,setChooseCtg] = useState('');

    const categoryChange = (e) =>{
        setChooseCtg(e.target.value)
    }
    

    return (
        <div className='FilterFoodsContainer' style={{'display':'none'}}>
            <Row>
                <Col xs={12} md={4}>
                    <Form.Group className="mb-3" className="selectTag">
                        <Form.Label id="form-label-tag" htmlFor="producSelect">Pick By Choices</Form.Label>
                        <Form.Select id="productSelect"  value={chooseCtg} onChange={categoryChange} >
                            <option>Select</option>
                            <option>Pizza</option>
                            <option>Burger</option>
                            <option>Bread</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={12} md={8}>
                    <div>
                        <img src={HeroImage} alt="hero" className="filterSideImage" />
                    </div>
                </Col>
            </Row>
            <Row className="filteredUItems">
                <FilteredItemComponent selected={chooseCtg} />
            </Row>
        </div>
    )
}

export default FilterFoods;
