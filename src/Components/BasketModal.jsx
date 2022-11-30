import styled from "styled-components"
import Popup from "reactjs-popup"
import { useState, useEffect } from "react"

const BasketImage = styled.img`
height:100px;
width:100px;        
`
const BasketBox = styled.div`
    display:flex;
    max-width: 15%;
    height:100%;
    justify-self: right;
    background-color: lightgray;
`
const CheckoutButton = styled.button`
    
`
const CatName = styled.h1`
    
`
const CatPic = styled.img`
    
`
const CatBreed = styled.h1`
    
`
const CatPrice = styled.h1`
    
`
const BasketPrice = styled.h1`
    
`
const ItemBox = styled.span`
    
`
const CatButton = styled.button`
    
`
const BasketIconBox = styled.div`
    justify-self:right;
`
const BasketIcon = () => {
    return (
        <BasketIconBox>
        <BasketImage src="../Images/catbasket.webp"/>
        <CatName>Open Basket</CatName>
        </BasketIconBox>
    )
}
const BasketWindow = (props) => {
    const [catBasketArray, setCatBasketArray] = useState(props.catArray)
    const removeCatFromBasket = (index) => {
        let tempArray = [...catBasketArray];
        tempArray.splice(index, 1);
        setCatBasketArray(tempArray)
    }
    return (
        <BasketBox>
            {catBasketArray.map((cat, index) => {
                return (
                    <ItemBox key = {index}>
                        <CatName>{cat.name}</CatName>
                        <CatPic src={cat.url} alt="cat"/>
                        <CatBreed>{cat.breed}</CatBreed>
                        <CatPrice>{cat.price}</CatPrice>
                        <CatButton onClick={() => {removeCatFromBasket(index)}}>Remove</CatButton>
                    </ItemBox>)
            })}
            <PriceArea catArray={catBasketArray}/>
        </BasketBox>
    )
}
const PriceArea = (props) => {
    const [totalBasketPrice, setTotalBasketPrice] = useState(0);
    useEffect(() => {
        props.catArray.forEach(element => {setTotalBasketPrice(totalBasketPrice + element.price)})
    }, [props.catArray])
    return (
        <>
        <BasketPrice>{totalBasketPrice ? (totalBasketPrice) : ('Empty Basket')}</BasketPrice>
        {totalBasketPrice && (<CheckoutButton>Checkout</CheckoutButton>)}
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
            <BasketWindow catArray={props.catArray}/>
        </Popup>
        
    )
}