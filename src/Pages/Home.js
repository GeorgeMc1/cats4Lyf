import {useState, useEffect} from "react";
import { Cat } from "../Components/Cat";
import { HomeWrapper } from "./Home.style";
import { faker } from '@faker-js/faker';
export const Home = (props) => {
    return(
        <HomeWrapper>
            {props.catList.map((cat, i) => {
                return(
                    <Cat key={i} cat={cat}/>
                )
            })}
        </HomeWrapper>
    )
}