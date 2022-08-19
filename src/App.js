import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Component/Pages/Menu";
import Welcome from "./Component/Pages/Welcome";
import Posts from "./Component/APIDEMO/Posts";
import Covid from "./Component/APIDEMO/Covid";
import Random from "./Component/APIDEMO/Random";
import Login from "./Component/Pages/Login";
import EditPosts from "./Component/Pages/EditPosts";
import AddPosts from "./Component/Pages/AddPosts";
import Register from "./Component/Pages/Register";
import React from "react";
import ComponentC from "./Component/useContextDemo/ComponentC";

 //create context
 export const userContext = React.createContext()

function App() {

   return (
     <div>
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route path="/welcome" element={<Welcome/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Component/APIDEMO/posts/*" element={<Posts/>}/>
            <Route path="/Component/APIDEMO/covid" element={<Covid/>}/>
            <Route path="/Component/APIDEMO/random" element={<Random/>}/>
            <Route path="/posts/:id" element={<EditPosts/>}/>
            <Route path="/addposts" element={<AddPosts/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </BrowserRouter>

     {/*  <div>
        <h3>useContect Demo</h3>
        <userContext.Provider value= {'Rahul Kumar'}>
          <ComponentC/>
        </userContext.Provider>
     </div> */}

     </div>
  );
}

export default App;
