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
        <TodoItem text="프로젝트 생성하기" done={true} />
        <TodoItem text="컴포넌트 스타일링 하기" done={true} />
        <TodoItem text="Context 만들기" done={false} />
        <TodoItem text="기능 구현하기" done={false} /> 
    </TodoListBlock>
    )
}
 
export default TodoList;