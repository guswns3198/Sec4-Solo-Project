import React from 'react';
import styled from "styled-components";
import TodoInput from './TodoInput';
import TodoLists from './TodoLists';

const Wrapper = styled.div`
  width: 50%;
  height: 58%;
  border: 3px solid black;
  margin: 0 auto;
  background-color: #F1F1F1;
`;


function TodoLine () {
  return (

    <Wrapper>
      <TodoInput />
      <TodoLists />
    </Wrapper>

  )
}

export default TodoLine