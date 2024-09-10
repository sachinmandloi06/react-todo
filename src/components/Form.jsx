import React, { useState } from 'react'

const Form = ({addTodo , todos}) => {

  const [text,setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text)
    setText("")
  }
       
  if (todos === 0){
    return(
      <h1 className='text-center text-secondary '>No Todo Yet</h1>
    )
   }


  return (
    <form onSubmit={(e) => handleSubmit(e)}>
    <input type="text"
    className="form-control rounded-0" 
    placeholder="Enter Text Here"
    required
    onChange={(e) => setText(e.target.value)}/>

    <button className="btn btn-success w-100 my-3 rounded-0">Save</button>
</form>

  )
}

export default Form
