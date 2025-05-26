import { useState } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import Create from "./components/Create";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-screen flex relative  ">
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
      
      </Routes>
       
      </div>
    </>
  );
}

export default App;
