import React,{useEffect,useState} from 'react';
import PizzaBanner from './PizzaBanner';
import FoodList from './FoodList';
import CarouselFood from './CarouselFood';
import MainModalBanner from './MainModalBanner';


const Home = () => {

    const [isBigModal,SetBigModal] = useState(false)


    const closeModalHandler = ()=>{
        SetBigModal(!isBigModal)
        localStorage.setItem('ModalClose', false)
    }
    useEffect(() => {
        var getModalStatus = localStorage.getItem('ModalClose');
        if(getModalStatus != null) {
            SetBigModal(isBigModal)
        } else {
            SetBigModal(!isBigModal)
        }

    }, [])

    return (
        <div>
            <MainModalBanner setVisibleModal={isBigModal} closeVisibleModal={closeModalHandler}/>
            <PizzaBanner />
            <FoodList/>
            <CarouselFood />
        </div>
    )
}

export default Home;
