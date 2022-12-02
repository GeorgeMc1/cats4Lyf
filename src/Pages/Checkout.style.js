import styled from "styled-components";
export const CheckoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`
export const BasketWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    max-width: 1000px;
`
export const ItemWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    h2{
        width: calc(90% / 3);
        margin: 10px 0;
        padding: 0 5px;
        font-size: 20px;
    }
`
export const ColumnWrapper = styled.div`
    display: flex;
    /* justify-content: space-around; */
    width: 100%;
    h2{
        margin: 0;
        text-align: center;
        width: calc(90% / 3);
    }
`
export const ButtonWrapper = styled.div`
    width: 10%;
`
export const CheckoutPrice = styled.p`

`
export const CheckoutButton = styled.button`

`