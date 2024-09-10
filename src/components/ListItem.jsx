import React from 'react'

const ListItem = ({todo , RemoveTodo}) => {

  if (todo === 0){
    return(
      <h1 className='text-center text-secondary '>No Todo Yet</h1>
    )
   }
  return (
    <li className="list-group-item rounded-0"> {todo.text}
    <span className='float-end'>
        <button className='mx-1 btn btn-primary btn-sm '>Edit</button>
        <button className='mx-1 btn btn-danger btn-sm' onClick={() => RemoveTodo(todo.id)}>Delete</button>
        </span>
        </li>
  )
}

export default ListItem;
