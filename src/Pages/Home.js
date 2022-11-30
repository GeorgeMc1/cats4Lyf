import {useState, useEffect} from "react";
import { Cat } from "../Components/Cat";
import { HomeWrapper } from "./Home.style";
import { faker } from '@faker-js/faker';
export const Home = () => {
    const [fullCatList, setFullCatList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
                if (!response.ok){ 
                    throw new Error(response.statusText);
                }
                const converted = await response.json();
                setFullCatList(converted);
            } catch (err){
                console.log(err);
            }
        }
        fetchData();
    }, [])
    return(
        <HomeWrapper>
            {fullCatList.map((cat, i) => {
                cat.name = faker.name.firstName();
                cat.breed = faker.animal.cat();
                cat.price = faker.commerce.price(100, 500, 0, '£');
                return(
                    <Cat key={i} cat={cat}/>
                )
            })}
        </HomeWrapper>
        <>
            {fullCatList.map((cat, i) => {
                return(
                    <Cat cat={cat}/>
                )
            })}
        </>
    )
}