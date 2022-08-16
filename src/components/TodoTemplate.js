import React from 'react';
import styled from "styled-components";

const TodoTemplateBlock = styled.div `
  width: 512px;
  height: 400px;

  position: relative;
  background: lightgray;
  border-radius: 20px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  border: 2px solid black;
`;
 
 
function TodoTemplate({ children }) {
    return (
      <TodoTemplateBlock>
        {children}
      </TodoTemplateBlock>
    )
}
 
export default TodoTemplate;





