import { useState } from "react";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";

const App = () => {



const [todos,settodos] = useState(
  [
    {
      id : 1,
      text : "Code"
    },
    {
      id : 2,
      text : "Eat"
    },
    {
      id : 3,
      text : "Sleep"
    },
    {
      id : 4,
      text : "Worry"
    },
    {
      id : 5,
      text : "Repeat"
    },
    
  ]
)

const RemoveTodo = (id) => {
  
  // settodos(todos.filter((todo)=>{
  //   if (todo.id !== id){
  //     return true;
  //   }
  // }))

  settodos(todos.filter((todo) => todo.id !== id));

}

const addTodo = (text) => {
    const newTodo ={
      text: text,
      id: crypto.randomUUID(),
    };
    settodos([...todos,newTodo])
  }


const[count,setCount] = useState(0)

const increaseValue = () => {
  setCount(count + 1);
}

const decreaseValue = () => {
  setCount(count-1);
}

const [dark,setdark] = useState(true)

const changetheme = () => {
  setdark(dark ? false : true)
}

// const editTodo = (todos) => {

// }

  return (
    <>

      <Navbar dark={dark} todos={todos}/>
      
    <div className={ dark? "container my-5 p-3 bg-secondary shadow " : "container my-5 p-3 shadow " } >
    <h2 className={dark? "text-center text-light" : "text-center"}>{count}</h2>
    <span>
    <button onClick={()=> increaseValue ()} className="btn btn-success rounded-0 my-2 ">Increase</button>
    <button onClick={()=> decreaseValue ()} className="mx-2 btn btn-danger rounded-0 my-2 ">decrease</button>
    <button onClick={()=> changetheme ()} className="mx-2 btn btn-dark text-light rounded-0 my-2 ">Change Theme</button>
    </span>

      <h1 className={ dark? "text-center my-3 display-3 text-light" : "text-center my-3 display-3"}>React-Todo</h1>
       <Form addTodo={addTodo}/>
       
       <ListGroup todos={todos}  RemoveTodo={RemoveTodo}/>
   
    </div>
    </>
  )
}

export default App;