// import { useState } from "react";
import {Link} from 'react-router-dom'

const Main = ({todos, setTodos ,newTodo , setNewTodo ,edit , setEdit}) => {


  const handleClick = (e) => {
    e.preventDefault();

    if (newTodo !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    } else {
      alert("type something !");
    }
  };

  const handleDelete = (i) => {

    // setTodos.filter(( todos ,i ) => {})
    console.log('clicked');

};

  return (
    <>
      <input
        type="text"
        placeholder="Add task ... "
        className="input-val"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="btn" onClick={handleClick}>
        submit
      </button>

      <br />
      <br />
      <br />
      <ul>
        {todos?.map((item) => (
          <li key={item}>
            {item} <button onClick={handleDelete} >Delete</button>
            <Link to={`/task-detail`}>
            <button >Edit</button>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Main;
