import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import React from 'react';
import Image from '../src/images/webImage';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .App {
    background-image: "https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg";
  }
`;


const Clock = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
}

Clock();
setInterval(Clock, 1000);

function App() {
  return (
    <Wrapper>
        <img src={Image} alt="배경" className="background"/>
    <div className="App">
        <span>동해물과 백두산이</span>
    </div>
    </Wrapper>
  );
}

export default App;
