import { CatWrapper } from "./Cat.style"
export const Cat = (props) => {
    return(
        <CatWrapper>
            <img src={props.cat.url} alt="cat"></img>
            <h2>{props.cat.name}</h2>
            <h3>Breed</h3>
            <p>{props.cat.breed}</p>
            <h3>Price</h3>
            <p>{props.cat.price}</p>
        </CatWrapper>
    )
}