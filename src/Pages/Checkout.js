import { CheckoutWrapper, BasketWrapper, ItemWrapper, ColumnWrapper } from "./Checkout.style";
export const Checkout = (props) => {
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
        </CheckoutWrapper>
    )
}