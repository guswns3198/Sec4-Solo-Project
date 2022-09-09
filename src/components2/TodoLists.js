/* eslint-disable array-callback-return */
import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {useState, useEffect} from 'react';
// import axios from "axios";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`

  width: 100%;
  height: 75%;
  /* border: 1px solid red; */
  padding-top: 20px;

  .lists {
    padding-left: 20px;
    font-weight: bold;
    font-size: 1.3rem;
    color: royalblue;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100vw;
  }

  .listgroup {
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
  }

  .search {
    cursor: pointer;
    padding: 0px 10px;
  }

  .search1 {
    cursor: pointer;
    padding: 0px 10px;
    color: gray;
  }

  .elements {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
  }

`;

function TodoLists () {

  const [list, setList] = useState(undefined)
  const [click, setClick] = useState(false)
  const [id, setId] = useState(null)
  const [input, setInput] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/Todos/")
    .then(res => res.json())
    .then(res => {
      setList(res)
    })
  }, [])

  const handleChangeClick = (e) => {
    setClick(!click);
    setId(e);
  }

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const finish = (e) => {
    setClick(!click);
    list.map((el) => {
      if (el.id === e) {
        el.Todo = input
      }
    })

    let allChange = {}
    list.map((el) => {
      if (el.id === e) {
        allChange = {
          "id": el.id,
          "Todo": input
        }
      }
    })

    fetch(`http://localhost:3001/Todos/${e}`,{
      method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allChange)
      })
      .then(() => {
        window.location.reload("/")
      })
      .catch(() => {
        console.log("실패")
      })
  }

  const handleDeleteClick = (e) => {
    fetch(`http://localhost:3001/Todos/${e}`, {
      method: 'DELETE'
    })
    .then(() => {
      window.location.reload("/")
    })
    .catch(() => {
      console.log("실패")
    })
  }

  return (

    <Wrapper>

      {list !== undefined ?
      <div className="listgroup">
      
      <span className="lists">
      {list.map((e) => {
        return ( 
        <div className="elements" key={e.id}>
        {click && id === e.id ?
        <div>
        <input onChange={handleInputChange}/>
        <button onClick={() => {finish(e.id)}}>수정완료</button>
        </div>
        :
        e.Todo }
        <span >
        <FontAwesomeIcon icon={faPencil} onClick={() => {handleChangeClick(e.id)}}  className="search search1"  />
        <FontAwesomeIcon icon={faTrash} onClick={() => {handleDeleteClick(e.id)}} className="search" />
        </span>
        </div>
        )
      })}
        </span>

      </div>
      
      :
        undefined
      }


    </Wrapper>

  )
}

export default TodoLists;