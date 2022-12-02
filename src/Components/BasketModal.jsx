import styled from "styled-components";
import Popup from "reactjs-popup";
import { useEffect } from "react";
import basketImage from "../Images/catbasket.webp";
import { Link } from "react-router-dom";
const BasketImage = styled.img`
    height:30px;
    width:30px;
`
const BasketBox = styled.div`
    display:flex;
    flex-flow:column nowrap;
    align-items: center;
    min-height: 200px;
    background-color: lightgray;
    border: 3px solid rgb(100,100,100);
    border-radius: 5px;
    box-shadow: 0 0 10px black;
`
const CheckoutButton = styled.button`
    
`
const CatName = styled.h1`
    font-size: 24px;
    margin: 0 5px;
`
const CatPic = styled.img`
    width:50%;
`
const CatBreed = styled.h1`
    font-size: 24px;
    margin: 0;
`
const CatPrice = styled.h1`
    font-size: 24px;
    margin: 0;
`
const BasketPrice = styled.h1`
    font-size: 24px;
    text-align: center;
    margin: 0;
`
const ItemBox = styled.span`
    display:flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
`
const CatButton = styled.button`
    margin: 0 5px;
`
const BasketIconBox = styled.div`
    display: flex;
    align-items: center;
    h1{
        margin: 0;
    }
`
const CatSec = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 33%;
`
const PriceSec = styled.div`
    display: flex;
    align-items: center;
`
const StyledPopup = styled(Popup)`
    &-content{
        width: 80%;
        min-width: 500px;
        min-height: 500px;
    }
    &-overlay{
        background: rgba(0, 0, 0, 0.5);
    }
`
const BasketIcon = () => {
    return (
        <BasketIconBox>
            <BasketImage src={basketImage}/>
            <h1>Open Basket</h1>
        </BasketIconBox>
    )
}
const BasketWindow = (props) => {
    const removeCatFromBasket = (index) => {
        let tempArray = [...props.catArray];
        tempArray.splice(index, 1);
        props.setCatArray(tempArray);
        props.setBasketPrice(0);
    }
    return (
        <BasketBox>
            {props.catArray.map((cat, index) => {
                return (
                    <ItemBox key = {index}>
                        <CatSec>
                            <CatName>{cat.name}</CatName>
                            <CatPic src={cat.url} alt="cat"/>
                        </CatSec>
                            <CatBreed>{cat.breed}</CatBreed>
                        <PriceSec>
                            <CatPrice>£{cat.price}</CatPrice>
                            <CatButton onClick={() => {removeCatFromBasket(index)}}>X</CatButton>
                        </PriceSec>
                    </ItemBox>
        )})}
            <PriceArea catArray={props.catArray} closeModal={props.closeModal} basketPrice={props.basketPrice} setBasketPrice={props.setBasketPrice}/>
        </BasketBox>
    )
}
const PriceArea = ({catArray, basketPrice, closeModal, setBasketPrice}) => {
    useEffect(() => {
        let totalPrice = 0;
        catArray.forEach(element => totalPrice += parseInt(element.price));
        setBasketPrice(totalPrice);
    }, [catArray, setBasketPrice])
    return (
        <>
            <BasketPrice>{catArray.length > 0 ? (`Total: £${basketPrice}`) : ('Empty Basket')}</BasketPrice>
            {basketPrice>0 && (<Link className="link" to="/checkout"><CheckoutButton onClick={closeModal}>Checkout</CheckoutButton></Link>)}
        </>
    )
}
export const BasketModal = (props) => {
    return(
        <StyledPopup
            trigger={<button className="button"><BasketIcon></BasketIcon></button>}
            modal
            >
            {close => (
                <BasketWindow catArray={props.catArray} setCatArray={props.setCatArray} closeModal={close} basketPrice={props.basketPrice} setBasketPrice={props.setBasketPrice}/>
            )}
        </StyledPopup>
    )
}