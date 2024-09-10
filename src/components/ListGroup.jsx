import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({todos , RemoveTodo}) => {

  if (todos === 0){
    return(
      <h1 className='text-center text-secondary '>No Todo Yet</h1>
    )
   }

  return (
    
    <ul className="list-group my-2">
   {todos.map((todo) => {
    return<ListItem key={todos.id} todo={todo} RemoveTodo={RemoveTodo}/>;
   })}
   
  </ul>

  )
}

export default ListGroup
