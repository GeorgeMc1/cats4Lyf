import { Cat } from "../Components/Cat";
import { HomeWrapper } from "./Home.style";
export const Home = (props) => {
    return(
        <HomeWrapper>
            {props.catList.map((cat, i) => {
                return(
                    <Cat key={i} cat={cat} basketCatList={props.basketCatList} setBasketCatArray={props.setBasketCatArray}/>
                )
            })}
        </HomeWrapper>
    )
}