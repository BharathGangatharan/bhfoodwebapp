import React,{useState,useEffect} from 'react';
import products from '../assets/fake-data/products';
import './Home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import SpecificFoodModal from './SpecificFoodModal';
import Col from 'react-bootstrap/Col';
import MainModal from './MainModal';


const FoodList = () => {
    const [selectedPrd,setSelectedPrd] = useState({});

    const clickedPrd = (itemd) => {
        setSelectedPrd(()=> {
            return ({
                itm: itemd,
                mod:true
            })
        })
    }


    const setModaloff = ()=> {
        setSelectedPrd({
            mod:false
        })
    }
    return (
        <>
        <Container className="foodListContainer">
            {
                products.slice(1,7).map((item,key)=>{
                    return (                    
                            <Col sm={12} md={4}>
                                <Card key={item.id}>
                                    <Card.Img variant="top" src={item.image01} alt={item.title} className='foodsImg' />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            Category: {item.category}
                                        </Card.Text>
                                        <Card.Text>
                                            Price: ${item.price}
                                        </Card.Text>
                                        <Button variant="primary" key={item.id} onClick={()=>clickedPrd(item)}>See product</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                    )
                })
            }
        </Container>
        <MainModal>
            {
                selectedPrd.mod ? <SpecificFoodModal getPrd={selectedPrd} onHide={setModaloff}/>: ''
            }
        </MainModal>
        </>
    )
}

export default FoodList;
