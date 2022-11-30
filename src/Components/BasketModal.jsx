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
    height:100%;
    justify-self: right;
    background-color: lightgray;
    /* position:absolute; */
`
const CheckoutButton = styled.button`
    
`
const CatName = styled.h1`
    text-size-adjust:150%;
    min-width: 15%;
`
const CatPic = styled.img`
    height:100px;
    width:100px;
`
const CatBreed = styled.h1`
    
`
const CatPrice = styled.h1`
    
`
const BasketPrice = styled.h1`
    
`
const ItemBox = styled.span`
    display:flex;
    flex-flow: row nowrap;
    min-height: 75%;
    min-width: 75%;
    justify-content: space-between;
`
const CatButton = styled.button`
    
`
const BasketIconBox = styled.div`
    justify-self:right;
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
                        <CatName>{cat.name}</CatName>
                        <CatPic src={cat.url} alt="cat"/>
                        <CatBreed>{cat.breed}</CatBreed>
                        <CatPrice>£{cat.price}</CatPrice>
                        <CatButton onClick={() => {removeCatFromBasket(index)}}>Remove</CatButton>
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
        <BasketPrice>{props.catArray.length > 0 ? ("£" + totalBasketPrice) : ('Empty Basket')}</BasketPrice>
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