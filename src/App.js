import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState, useEffect} from "react";
import { faker } from '@faker-js/faker';
import './App.css';
import {Home} from "./Pages/Home";
import { Checkout } from "./Pages/Checkout";
import { Navbar } from "./Components/Navbar";
import { CatPage } from "./Pages/catPage";

function App() {
  const [fullCatList, setFullCatList] = useState([]);
  const [basketCatList, setBasketCatList] = useState([]);
  const [totalBasketPrice, setTotalBasketPrice] = useState(0);
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
      <Navbar 
        catArray={basketCatList} 
        setCatArray={setBasketCatList} 
        basketPrice={totalBasketPrice} 
        setBasketPrice={setTotalBasketPrice}
        fullCatArray={fullCatList}
        setFullCatArray={setFullCatList}
      />
      <Routes>
        <Route 
        path="/" 
        element={<Home 
          setCatList={setFullCatList}
          catList={fullCatList} 
          basketCatList={basketCatList} 
          setBasketCatArray={setBasketCatList}/>}
        />
        <Route 
          path="/checkout" 
          element={<Checkout 
            basket={basketCatList} 
            setBasket={setBasketCatList} 
            basketPrice={totalBasketPrice} 
            setBasketPrice={setTotalBasketPrice}
            fullCatList={fullCatList}
            setFullCatList={setFullCatList}
        />}/>
        <Route 
          path="/:id" 
          element={<CatPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;