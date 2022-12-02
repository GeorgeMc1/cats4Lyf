import { CheckoutWrapper, BasketWrapper, ItemWrapper, ColumnWrapper, CheckoutPrice, CheckoutButton } from "./Checkout.style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Checkout = (props) => {
    const [basketPrice, setBasketPrice] = useState(0)
    let catArray = props.basket, setBasket = props.setBasket;
    useEffect(() => {
            let totalPrice = 0;
            catArray.forEach(element => totalPrice += parseInt(element.price));
            setBasketPrice(totalPrice);console.log(basketPrice)
        }, [catArray, ])
    return(
        <CheckoutWrapper>
            <h1>Checkout</h1>
            <BasketWrapper>
                <ColumnWrapper>
                    <h2>Name</h2>
                    <h2>Breed</h2>
                    <h2>Price</h2>
                </ColumnWrapper>
                {props.basket.map((cat, i) => {
                    return(
                        <ItemWrapper key={i}>
                            <h2>{cat.name}</h2>
                            <h2>{cat.breed}</h2>
                            <h2>£{cat.price}</h2>
                        </ItemWrapper>
                    )
                })}
            </BasketWrapper>
            <CheckoutPrice onClick={() => {console.log(basketPrice)}}>{`Total Price: £${basketPrice}`}</CheckoutPrice>
            <Link className="link" to="/"><CheckoutButton onClick={() => setBasket([])}>Confirm Checkout</CheckoutButton></Link>
        </CheckoutWrapper>
    )
}