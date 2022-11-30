import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState, useEffect} from "react";
import { faker } from '@faker-js/faker';
import './App.css';
import { BasketModal } from "./Components/BasketModal";
import {Home} from "./Pages/Home";

function App() {
  const [fullCatList, setFullCatList] = useState([]);
  const [basketCatList, setBasketCatList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
        if (!response.ok){ 
          throw new Error(response.statusText);
        }
        const converted = await response.json();
        const newCatList = converted.map(cat => {
          return {
            name: faker.name.firstName(),
            breed: faker.animal.cat(),
            price: faker.commerce.price(100, 500, 0),
            url: cat.url,
            inCart: false
          };
        });
        setFullCatList(newCatList);
      } catch (err){
        console.log(err);
      }
    }
    fetchData();
  }, [])
  return (
    <BrowserRouter>
      <BasketModal catArray={basketCatList} setCatArray={setBasketCatList}/>
      <Routes>
        <Route path="/" element={<Home catList={fullCatList} basketCatList={basketCatList} setBasketCatArray={setBasketCatList}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;