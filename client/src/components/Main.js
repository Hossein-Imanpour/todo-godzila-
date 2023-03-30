import { useState } from "react";
import { useEffect } from 'react';
// import axios from "axios";
import { deleteTodo } from "../api/todoApi";
import {useNavigate} from 'react-router-dom'
// import {Link} from 'react-router-dom'

const Main = ({ newTodo , setNewTodo ,edit , setEdit}) => {

    const [fetchData , setFetchData] = useState([]) 
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault();

    if (newTodo) {
      /// use  fetch to send a new todo;
 fetch('https://todo-list-oiax.onrender.com/' ,{
            method: "POST",
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({'todo' : newTodo})
          })

          .then((res) => {
           return res.json()
          })
          .then((res) => {
            console.log(res);
            setFetchData([res , ...fetchData])
            setNewTodo("");
          })
          .catch((err) => {
            console.log(err);
          })
        /// end of fetch operation  ;
    //   setTodos([...todos, newTodo]);
      
    } else {
      alert("type something !");
    }
  };



useEffect(() => {
    fetch('https://todo-list-oiax.onrender.com/')
    .then((res)=> {
      return res.json();
    })
    .then((data)=>{
        console.log(data);
        setFetchData(data)
    })
    }, []);
////////////////////////
const handleDelete = async (id) => {

 const  ID = id.target.parentElement.parentElement.parentElement.id;
 await deleteTodo(ID);
  navigate(0)
}
////////////////////////

  return (
    <>
        
        <form className="parentt   " mt="5rem" onSubmit={handleClick}>
        <input
        value={newTodo}
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

                <li key={a._id} id={a._id} className='main todos  '>
                    {a.todo}
                    <section className="btn-sec">

                    <button className="del-btn"><span class="material-symbols-outlined icons" onClick={handleDelete} >
                        delete</span></button>

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
