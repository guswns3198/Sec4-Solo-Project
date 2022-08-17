import React from 'react';
import styled from "styled-components";
import {useState, useEffect} from 'react';
import axios from "axios";

const shortid = require('shortid');

const Wrapper = styled.div`
  height: 20%;
  width: 100%;
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


 .maintitle {
   font-size: 1.5rem;
   font-weight: bold;
   font-style: italic;
   padding-bottom: 10px;
 }

 .inputbox {
  width: 30vw;
  height: 25px;
  padding-top: 10px;
  display: flex;
  margin-right: 20px;
  resize: none;
 }

 .inputtab {
   display: flex;
   flex-direction: row;
 }

 button {
   width: 50px;
   height: 40px;
   background-color: #76BA99;
   color: white;
   font-weight: bold;
   font-size: 1.2rem;
   cursor: pointer;
 }
`;

function TodoInput () {

  const [list, setList] = useState("")
  
  const handleChangeEvent = (e) => {
    setList(e.target.value)
  }

  const handleButtonClick = (e) => {
      e.preventDefault();
  
  const todoReady = {
    "id": shortid(),
    "Todo": list
  }

      let reqPost = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoReady)
      }
      fetch('http://localhost:3001/Todos/', reqPost)
      .then(res => res.json())
      setList("")
    }
    
    useEffect(() => {
      fetch("http://localhost:3001/Todos/")
      .then(res => res.json())
      .then(res => setList(res))
    }, [])
    
  

  return (

    <Wrapper>
      <span className="maintitle">오늘의 할 일은?!</span>

      <div className="inputtab">

      <input
      onChange={handleChangeEvent}
      className="inputbox"
      placeholder="할 일을 적어주세요"
      >
      </input>

      <button
      onClick={(e) => handleButtonClick(e)}
      >
      등록
      </button>

      </div>

    </Wrapper>

  )
}



export default TodoInput