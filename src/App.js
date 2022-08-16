import styled from 'styled-components';
import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;

 .App {
   display: flex;
   justify-content: center;
   line-height: 20vh;
   font-weight: bold;
   font-size: 4rem;
   color: white;
   -webkit-text-stroke: 2px black;
   font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
 }

 .title {
   display: flex;
   justify-content: center;
   line-height: 15vh;
   font-weight: bold;
   font-size: 4rem;
   color: #B93160;
   font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
   -webkit-text-stroke: 2px white;
 }

 .weather {
   display: flex;
   flex-direction: column;
   position: absolute;
   left: 85%;
   padding: 50px 20px 0px 0px;
   font-size: 1.7rem;
   font-weight: bold;
   color: white;
   font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
   -webkit-text-stroke: 1px black;
 }

 .weathers {
   padding: 5px 0px 5px 0px;
 }

 .menu {
   font-size: 2rem;
   padding-top: 20px;
   margin-left: 20px;
 }

 .show-menu{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 15%;
  height: 30%;
  position: absolute;
  left: 0px;
  transition: 1s;
  background-color: #FEFBF6;
  border-right: 3px solid black;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
}

.hide-menu{
width: 15%;
height: 30%;
position: absolute;
left: -15%;
transition: 1s;
background-color: #FEFBF6;
}

.menuchildren {
  font-size: 1.7rem;
  font-weight: bold;
  color: black;
  padding: 20px 0px 20px 0px;
  cursor: pointer;
  text-decoration: none;
}

.menuchildren:hover {
  font-size: 1.7rem;
  font-weight: bold;
  color: royalblue;
  padding: 20px 0px 20px 0px;
}

`;



function App() {

  const [click, setClick] = useState(false)

  const handleButtonMenu = () => {
    setClick(!click);
    console.log("메뉴")
  }

  const [timer, setTimer] = useState("00:00:00");
  // 타이머 함수
  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${hours}:${minutes}:${seconds}`)
  }

  const startTimer = () => {
    setInterval(currentTimer, 1000)
  }

  startTimer();

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState(0);

  const apiCall = axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=Bucheon&appid=853c4cbd37a70d08e338339338dcb154&units=metric`
    )
    .then((res) => {
     // console.log(res);
      setCity(res.data.name);
      setWeather(res.data.weather[0].main);
      setTemp(res.data.main.feels_like);
    });



  return (
  <Wrapper style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg)` }}>

      <span className="menu" onClick={handleButtonMenu}>
      <FontAwesomeIcon icon={faBars}/>
      </span>

      <div className={click ? "show-menu" : "hide-menu"}>

        <a className="menuchildren" href="https://github.com/guswns3198" target='_blank'><span>GitHub</span></a>
        <a className="menuchildren" href="https://hjfestudyroom.tistory.com/" target='_blank'><span>Blog</span></a>

      </div>

      

      <div className="weather">
      <span className="weathers">
      지역 : {city}
      </span>

      <span className="weathers">
      날씨 : {weather}
      </span>

      <span className="weathers">
      온도 : {temp}℃
      </span>
    </div>
    
      <span className="App">
        {timer}
      </span>

      <span className="title">
        Write a Todo and Enter
      </span>

      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>      


  </Wrapper>
  );
}

export default App;
