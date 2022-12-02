import { CheckoutWrapper, BasketWrapper, ItemWrapper, ColumnWrapper, CheckoutPrice, CheckoutButton, ButtonWrapper } from "./Checkout.style";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export const Checkout = ({basket, setBasketPrice, basketPrice, setBasket}) => {
    useEffect(() => {
        let totalPrice = 0;
        basket.forEach(element => totalPrice += parseInt(element.price));
        setBasketPrice(totalPrice);
    }, [basket, setBasketPrice])
    const removeCatFromBasket = (index) => {
        let tempArray = [...basket];
        tempArray.splice(index, 1);
        setBasket(tempArray);
        setBasketPrice(0);
    }
    return(
        <CheckoutWrapper>
            <h1>Checkout</h1>
            <BasketWrapper>
                <ColumnWrapper>
                    <h2>Name</h2>
                    <h2>Breed</h2>
                    <h2>Price</h2>
                </ColumnWrapper>
                {basket.map((cat, i) => {
                    return(
                        <ItemWrapper key={i}>
                            <h2>{cat.name}</h2>
                            <h2>{cat.breed}</h2>
                            <h2>£{cat.price}</h2>
                            <ButtonWrapper>
                                <button onClick={() => removeCatFromBasket(i)}>X</button>
                            </ButtonWrapper>
                        </ItemWrapper>
                    )
                })}
            </BasketWrapper>
            <CheckoutPrice onClick={() => {console.log(basketPrice)}}>{`Total Price: £${basketPrice}`}</CheckoutPrice>
            <Link className="link" to="/"><CheckoutButton onClick={() => setBasket([])}>Confirm Checkout</CheckoutButton></Link>
        </CheckoutWrapper>
    )
}