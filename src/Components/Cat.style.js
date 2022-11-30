import styled from "styled-components";
export const CatWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 260px;
    margin: 5px;
    padding: 5px;
    background-color: grey;
    box-shadow: 0 0 10px black;
    border-radius: 5px;
    cursor: pointer;

    h2{
        font-size: 18px;
        margin: 0;
    }
    h3{
        font-size: 16px;
        margin: 1px 0;
    }
    p{
        margin: 0;
    }
    img{
        max-width: 100%;
        max-height: 50%;
    }
`