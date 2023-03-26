import Main from "./components/Main";
import Navbar from "./components/Navbar";
import {useState} from 'react';
import  {Routes , Route} from 'react-router-dom'
import Detail from "./pages/Detail";
import './index.css'

function App() {



  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState("");

  const [edit , setEdit] = useState(null);


  return (
   <>
   <Navbar />
   <Routes>
      <Route path="/" element={<Main todos={todos} setTodos={setTodos} newTodo={newTodo} setNewTodo={setNewTodo}  edit={edit} setEdit={setEdit}/>}/>
      <Route path="task-detail" element={<Detail/>}/>
   </Routes>
   </>
  );
}

export default App;
 