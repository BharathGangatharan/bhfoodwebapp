import React,{useState,useEffect} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import products from '../assets/fake-data/products';
import FilterEmpty from './FilterEmpty';
import './Home.css';

const FilteredItemComponent = (props) => {
    const navigate = useNavigate();
    const selectedFilter = props.selected;
    const [filteredItem,SetfilteredItem]= useState([])

    useEffect(()=>{
      if (selectedFilter) {
        if (filteredItem.length > 0) {
          filteredItem.length=0;
        }
        products.filter((prdItem)=>{
            if(prdItem.category === selectedFilter) {
              SetfilteredItem ((prevItem)=>{
                return [...prevItem,prdItem]
              })
            }
        })
      }
    },[selectedFilter])


    const prdDetails = (title)=>{
      navigate(`/product/${title}`);
    }

    return (
      <Row className="items">
        { selectedFilter ? 
        filteredItem.map((eachFilterItmFinal) => {
          return (
          <Col sm={12} md={4}>
            <Card key={eachFilterItmFinal.id}>
              <Card.Img
                variant="top"
                src={eachFilterItmFinal.image01}
                alt={eachFilterItmFinal.title}
                className="foodsImg"
              />
              <Card.Body>
                <Card.Title className="text-center">{eachFilterItmFinal.title}</Card.Title>
                <Card.Text className="text-center">Category: {eachFilterItmFinal.category}</Card.Text>
                <Link to={`/product/${eachFilterItmFinal.id}`}><Card.Text className="text-center">Price: ${eachFilterItmFinal.price}</Card.Text></Link>
                <Button variant="primary" onClick={()=>{prdDetails(eachFilterItmFinal.id)}}>See product</Button>
              </Card.Body>
            </Card>
          </Col>
        )
        }) : <FilterEmpty/>
      }
      </Row>
    );
}

export default FilteredItemComponent;
