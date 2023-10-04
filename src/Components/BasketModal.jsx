import styled from "styled-components";
import Popup from "reactjs-popup";
import { useEffect } from "react";
import basketImage from "../Images/catbasket.webp";
import { Link } from "react-router-dom";
import number1 from "../Images/number1.png"
import number2 from "../Images/number2.png"
import number3 from "../Images/number3.png"
import number4 from "../Images/number4.png"
import number5 from "../Images/number5.png"
import number6 from "../Images/number6.png"
import number7 from "../Images/number7.png"
import number8 from "../Images/number8.png"
import number9 from "../Images/number9.png"
import plus from "../Images/plus.png"
const numberArray = [" ", number1, number2, number3, number4, number5, number6, number7, number8, number9, plus]


const BasketImage = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    height:30px;
    width:30px;
    display: flex;
    justify-content:center;
    align-items: flex-end;
    div{
        min-height:75%;
        min-width:75%;
        background-size: cover;
        background-repeat: no-repeat;
    };
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
const BasketIcon = (props) => {
    let numberImage;
    if (props.catArray.length<10){numberImage = numberArray[props.catArray.length]}
    else {numberImage=numberArray[10]}
    
    
    return (
        <BasketIconBox>
                <BasketImage style={{backgroundImage: `url(${basketImage})`}}>
                    <div style={{backgroundImage: `url(${numberImage})`}}/>
                </BasketImage>
        </BasketIconBox>
    )
}
const BasketWindow = (props) => {
    const removeCatFromBasket = (index) => {
        let tempArray = [...props.catArray];
        let tempFullArray = [...props.fullCatArray];
        tempFullArray.forEach(i => {
            if (i.url === tempArray[index].url){
                i.inCart = !i.inCart;
            }
        })
        props.setFullCatArray(tempFullArray);
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
            trigger={<button className="button"><BasketIcon catArray={props.catArray}></BasketIcon></button>}
            modal
            >
            {close => (
                <BasketWindow 
                catArray={props.catArray} 
                setCatArray={props.setCatArray} 
                closeModal={close} 
                basketPrice={props.basketPrice} 
                setBasketPrice={props.setBasketPrice}
                fullCatArray={props.fullCatList}
                setFullCatArray={props.setFullCatList}
                />
            )}
        </StyledPopup>
    )
}