import styled from "styled-components"
import Popup from "reactjs-popup"
import { useEffect, useState } from "react"
import basketImage from "../Images/catbasket.webp"

const BasketImage = styled.img`
height:100px;
width:100px;
`
const BasketBox = styled.div`
    display:flex;
    flex-flow:column nowrap;
    /* max-width: 15%; */
    min-height:100px;
    background-color: lightgray;
    /* position:absolute; */
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
    justify-self:right;
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
    /* min-width: 33%; */
`
const BasketIcon = () => {
    return (
        <BasketIconBox>
        <BasketImage src={basketImage}/>
        <CatName>Open Basket</CatName>
        </BasketIconBox>
    )
}
const BasketWindow = (props) => {
    const removeCatFromBasket = (index) => {
        let tempArray = [...props.catArray];
        tempArray.splice(index, 1);
        props.setCatArray(tempArray)
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
                            <CatButton onClick={() => {removeCatFromBasket(index)}}>Remove</CatButton>
                        </PriceSec>
                    </ItemBox>
        )})}
            <PriceArea catArray={props.catArray}/>
        </BasketBox>
    )
}
const PriceArea = (props) => {
    const [totalBasketPrice, setTotalBasketPrice] = useState(0);
    useEffect(() => {
        let totalPrice = 0;
        props.catArray.forEach(element => totalPrice += parseInt(element.price));
        setTotalBasketPrice(totalPrice);
    }, [props.catArray])
    return (
        <>
        <BasketPrice>{props.catArray.length > 0 ? ("Total: £" + totalBasketPrice) : ('Empty Basket')}</BasketPrice>
        {totalBasketPrice>0 && (<CheckoutButton setCatArray={props.setCatArray} onClick={() => {props.setCatArray([])}}>Checkout</CheckoutButton>)}
        </>
    )
}
export const BasketModal = (props) => {
    
    return(
        <Popup
            trigger={<button ><BasketIcon className="button"></BasketIcon></button>}
            modal
            nested
            >
            <BasketWindow catArray={props.catArray} setCatArray={props.setCatArray}/>
        </Popup>
        
    )
}