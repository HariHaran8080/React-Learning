import { useState } from "react";
import {Fragment} from "react";
import "./App.css";

let author="manthew"

let isLogged=true;
function App() {
  return (
    <Fragment>
      <h1 style={{backgroundColor:"aqua",color:"black" }}>React JSX</h1>
      <label htmlFor="user">UserName : </label>
      <input id="user"  type="text"></input>
      <p>{author}</p>
      {
        isLogged && <p>Welcome to Our Webiste</p>
      }
      {/* <button onClick={newFun}></button> */}
    </Fragment>,
    <>
    <h1>Next Episode -Componet </h1>
    </>
  );
} 

export default App;
//1.11.57

