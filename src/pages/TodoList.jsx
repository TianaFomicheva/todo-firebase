import React, { useContext, useState, useEffect } from 'react'
import DBContext from '../context/db'
import { List} from 'mdc-react'
import  {Headline4} from '@material/react-typography'
import TodoListItem from '../components/TodoListItem'
import  MDSpinner from 'react-md-spinner'
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'

export default function TodoListPage({ match }) {

  const [todos, setTodos] = useState([])
  const db = useContext(DBContext)
  useEffect(() => {
    setTodos();
    db.getListTodos(match.params.ListId)
      .then(setTodos)
      .then(console.log(match.params.ListId))
  }, [db, match.params.ListId])


  const list = db.lists.find(list => list.id === match.params.ListId)
  if (!list || !todos) return <MDSpinner />
const handleSubmit = (title)=>{
  db.collection("todos").add({
    title: title,
    
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
}

  return (
    <div className="todo-list-page">
        <TodoList todos={todos} list={list} />    
        <TodoForm onSubmit={handleSubmit}/>  
    </div>
  )
}