import { useState } from "react";
import { useEffect } from 'react';
// import {Link} from 'react-router-dom'

const Main = ({todos, setTodos ,newTodo , setNewTodo ,edit , setEdit}) => {

    const [fetchData , setFetchData] = useState([]) 

  const handleClick = (e) => {
    e.preventDefault();

    if (newTodo !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
      /// use  fetch to send a new todo;
      fetch('http://localhost:4000/' ,{
        method: "POST",
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({'todo' : newTodo})
      })
      .then((res) => {
        console.log(res.json);
      })
      .catch((err) => {
        console.log(err);
      })
        /// end of fetch operation  ;
    } else {
      alert("type something !");
    }
  };



useEffect(() => {
    fetch('http://localhost:4000/')
    .then((res)=> {
      return res.json();
    })
    .then((data)=>{
        console.log(data);
        setFetchData(data)
    })
    }, [todos]);
////////////////////////

  return (
    <>
        
        <form className="parentt   " mt="5rem" onSubmit={handleClick}>
        <input
        type="text"
        placeholder="Add task ... "
        className="input-val inp  "
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="submit-btn bg-primary" >
        submit
      </button>
        </form>

      <br />
      <br />
      <br />
     
            <ul className="main ul container">
               {  fetchData?.map((a) => ( 

                <li key={a._id} className='main todos  '>
                    {a.todo}
                    <section className="btn-sec">
                    <button className="del-btn"><span class="material-symbols-outlined icons">delete</span></button>
                    <button className="edit-btn"><span class="material-symbols-outlined">edit</span></button>
                    </section>
                </li>
                ))
                 }
            </ul>




    </>
  );
};

export default Main;
