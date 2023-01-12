import React, { useState } from "react";
import './App.css';

function App() {
  
  

  const [calc,setCalc] = useState("")
  const [result,setResult] = useState("")


  const ops = ["/","*","-","+"]

  const update = (e) => { 
    setCalc(calc + e)
  }
  return (
    <div className="body">

      <div className="calculator">
        <div className="input">
          {result ? <span>(0)</span> : ""}
          {calc || "0"}
        </div>



        <div className="btns">
          <button type="button" className=" btn1" data-num="*" onClick={() => update("*")}>*</button>
          <button type="button" className=" btn1" data-num="/" onClick={() => update("/")}>/</button>
          <button type="button" className=" btn1" data-num="+" onClick={() => update("+")}>+</button>
          <button type="button" className=" btn1" data-num="-" onClick={() => update("-")}>-</button>
        </div>
          <div classNameName="btn22">
            <button type="button" className=" btn2" data-num="9" onClick = {() => update("9")}>9</button>
            <button type="button" className=" btn2" data-num="8" onClick = {() => update("8")}>8</button>
            <button type="button" className=" btn2" data-num="7" onClick = {() => update("7")}>7</button>
            <button type="button" className=" btn2" data-num="6" onClick = {() => update("6")}>6</button>
            <button type="button" className=" btn2" data-num="5" onClick = {() => update("5")}>5</button>
            <button type="button" className=" btn2" data-num="4" onClick = {() => update("4")}>4</button>
            <button type="button" className=" btn2" data-num="3" onClick = {() => update("3")}>3</button>
            <button type="button" className=" btn2" data-num="2" onClick = {() => update("2")}>2</button>
            <button type="button" className=" btn2" data-num="1" onClick = {() => update("1")}>1</button>
            <button type="button" className=" btn2" data-num="0" onClick = {() => update("0")}>0</button>
          </div>

          <div classNameName="btn333">
            <button type="button" className=" btn3 " data-num=".">.</button>
            <button type="button" className=" btn3 " >=</button>
            <button type="button" className=" btn3 " >C</button>
          </div>



        </div>
      </div>




  );
}

export default App;
