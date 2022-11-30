import styled from "styled-components"
import Popup from "reactjs-popup"
import { useState } from "react"
export const BasketModal = () => {
    const BasketImage = styled.img`
        
    `
    const BasketBox = styled.div`
        display:flex;
        max-width: 15%;
        height:100%;
        justify-self: right;
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
    const BasketIcon = () => {
        return (
            <BasketImage src=""/>
        )
    }
    
    const BasketWindow = () => {
        const [totalBasketPrice, setTotalBasketPrice] = useState(0);
        const [catBasketObjectArray, setCBOA] = useState();
        return (
            <BasketBox>
                {setCBOA(this.catArray)};{{catBasketObjectArray}.map((cat, index) => {
                    setTotalBasketPrice(totalBasketPrice+cat.price);
                    return (
                        <ItemBox key = {index}>
                            <CatName>{cat.name}</CatName>
                            <CatPic src={cat.pic}/>
                            <CatBreed>{cat.breed}</CatBreed>
                            <CatPrice>{cat.price}</CatPrice>
                            <CatButton>Remove</CatButton>
                        </ItemBox>)
                })}
                <BasketPrice>{totalBasketPrice}</BasketPrice>
                <CheckoutButton>Checkout</CheckoutButton>
            </BasketBox>
        )
    }
    return(
        <Popup
            trigger={<BasketIcon/>}
            modal
            nested
        >
            <BasketWindow/>
        </Popup>
        
    )
}