import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState, useEffect} from "react";
import { faker } from '@faker-js/faker';
import './App.css';
import {Home} from "./Pages/Home";

function App() {
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
  fullCatList.forEach(cat => {
    cat.name = faker.name.firstName();
    cat.breed = faker.animal.cat();
    cat.price = faker.commerce.price(100, 500, 0);
  });
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home catList={fullCatList}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;