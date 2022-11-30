import styled from "styled-components"
import Popup from "reactjs-popup"
export const BasketModal = () => {
    const BasketImage = styled.img`
        
    `
    const BasketBox = styled.div`
        
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
    const BasketIcon = () => {
        return (
            <BasketImage src=""/>
        )
    }
    const BasketWindow = () => {
        const [totalBasketPrice, setTotalBasketPrice] = useState(0);
        return (
            <BasketBox>
                {catBasketObjectArray.map((cat, index) => {
                    setTotalBasketPrice(totalBasketPrice+=cat.price);
                    return (
                        <ItemBox key = {index}>
                            <CatName>{cat.name}</CatName>
                            <CatPic src={cat.pic}/>
                            <CatBreed>{cat.breed}</CatBreed>
                            <CatPrice>{cat.price}</CatPrice>
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