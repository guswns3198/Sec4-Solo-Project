import React from "react";
import styled from "styled-components";
import { useState } from 'react';
 
const TodoHeadBlock = styled.div`
    padding: 10px 32px 4px 32px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        display: flex;
        justify-content: center;
        margin: 0px;
        font-size: 36px;
        color: #FFE898;
        -webkit-text-stroke: 1px black;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;


    }
    .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
`;
 
function TodoHead() {


  // const [days, setDays] = useState("00월 00일");

  // const currentTimer = () => {
  //   const date = new Date();
  //   const month = String(date.getMonth()).padStart(2, "0");
  //   const day = String(date.getDate()).padStart(2, "0");
  //   setDays(`${month}월 ${day}일`)
  // , []}

  // currentTimer();

    return (
        <TodoHeadBlock>
            <h1>오늘의 할 일</h1>
        </TodoHeadBlock>
    )
}
 
export default TodoHead;