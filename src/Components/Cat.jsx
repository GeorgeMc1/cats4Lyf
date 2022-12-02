import { CatWrapper } from "./Cat.style";
export const Cat = (props) => {
    const catList = props.catList;
    const setCatList = props.setCatList;
    const addToBasket = () => {
        if (props.cat.inCart === false) {let temp = [...props.basketCatList], fullTemp = [...catList];
        fullTemp.forEach((cat) => { 
            if (cat.url === props.cat.url){
                cat.inCart = true
            }
        });
        setCatList(fullTemp);
        temp.push(props.cat);
        props.setBasketCatArray(temp);}
    }
    return(
        <CatWrapper 
        onClick={() => addToBasket()}
        inCart={props.cat.inCart}
        style={{backgroundColor: !props.cat.inCart ? "#808080" : "blue"}}
        >
            <img src={props.cat.url} alt="cat"></img>
            <h2>{props.cat.name}</h2>
            <h3>Breed</h3>
            <p>{props.cat.breed}</p>
            <h3>Price</h3>
            <p>£{props.cat.price}</p>
        </CatWrapper>
    )
}