import styled from "styled-components";
import { Link } from "react-router-dom";
import { BasketModal } from "./BasketModal";

export const Navbar = (props) => {
    return(
        <NavbarWrapper>
            <StyledLink className="link" to ="/"><button>Home</button></StyledLink>
            <BasketModal 
                setFullCatList={props.setFullCatArray}
                fullCatList={props.fullCatArray}
                catArray={props.catArray} 
                setCatArray={props.setCatArray} 
                basketPrice={props.basketPrice} 
                setBasketPrice={props.setBasketPrice}/>
        </NavbarWrapper>
    )
    
}

const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 3px solid gray;
    border-radius: 5px;
    .button{
        border: 0;
        background: 0;
        cursor: pointer;
        :hover{
            background-color: rgb(128,128,128);
            box-shadow: -5px 0 10px rgb(128,128,128);
        }
    }
`
const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: 0;
    height: 100%;
    border-radius: 5px;
    :hover{
        background-color: rgb(128,128,128);
        box-shadow: 5px 0 10px rgb(128,128,128);
    }
    button{
        height: 100%;
        border: 0;
        background: 0;
        border-radius: 5px;
        cursor: pointer;
        :hover{
            background-color: rgb(128,128,128);
            box-shadow: -5px 0 10px rgb(128,128,128);
        }
    }
`