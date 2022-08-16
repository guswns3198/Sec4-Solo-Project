import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
 
const TodoListBlock = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px 20px;
    padding-bottom: 48px;
    overflow-x: auto;
    background: none; /* 임시 스타일*/
`;
 
function TodoList() {
    return ( 
    <TodoListBlock>
        <TodoItem text="프로젝트 준비하기" done={true} />
        <TodoItem text="미니 프로젝트 만들기" done={true} />
        <TodoItem text="Hook 마스터하기" done={false} />
        <TodoItem text="다 복습하기" done={false} /> 
    </TodoListBlock>
    )
}
 
export default TodoList;