import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <NavbarWrapper>
            <Link to ="/">Home</Link>
        </NavbarWrapper>
    )
}

const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-around;
    border: 3px solid gray;
`