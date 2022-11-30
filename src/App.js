import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import { BasketModal } from "./Components/BasketModal";
import {Home} from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <BasketModal catArray={[{name:"bob", price:100}]}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;