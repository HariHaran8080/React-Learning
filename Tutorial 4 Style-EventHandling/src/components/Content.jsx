import React from "react";
import styled from "styled-components"

let Button=styled.button 
`background-color:blue;
color:white;
width:100px;
height:50px;
`
let NewButton=styled(Button)
`
background-color:crimson;
box-shadow:10px 10px 10px black;
`
const Content = () => {

  let headingStyle = {
    backgroundColor: "aqua",
    color: "white",
    boxShadow: "10px 10px 5px black",
  }

  let user="kavin";

  function printSomething(e)
  {
        // console.log(e.target.innerText);
        // console.log("hello");
        user="Aavin";
        console.log(user);
        
        
  }
  function printSomething1(event)
  {
        // console.log(event.target.innerText);
        // console.log('hwlloo weloxme');
        user="Ranga Agent";
        console.log(user);
        
        
  }

  return (
    <main>
      {/* Method of applying Style 1 */}
      {/* <h1 style={{backgroundColor:"aqua",color:"white"}}>Main Content</h1>
       */}
      {/* 2 */}

      <h1 style={headingStyle}>Main Content -{user}</h1>
      <Button onClick={printSomething}>Click Me</Button>
      <br/>
      <br/>
      <NewButton onClick={(e)=>{printSomething1(e)}}>Touch Me</NewButton>
    </main>
  );
};

export default Content;
