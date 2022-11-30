import {useState, useEffect} from "react";
import { Cat } from "../Components/Cat";
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
        <>
            {fullCatList.map((cat, i) => {
                return(
                    <Cat cat={cat}/>
                )
            })}
        </>
    )
}