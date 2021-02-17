import React, { useContext, useState, useEffect } from 'react'
import DBContext from '../context/db'
import { List } from 'mdc-react'
import { Headline4 } from '@material/react-typography'
import TodoListItem from '../components/TodoListItem'
import MDSpinner from 'react-md-spinner'
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'
import TodoDetails from '../components/TodoDetails'

export default function TodoListPage({ match }) {
  const [selectedTodo, setSelectedTodo] = useState(null);
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
  const handleSubmit = (title) => {
    db.createTodo({
      title,
      ListId: list.id
    })
      .then(todo => setTodos([...todos, todo]))
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  const handleDelete = (todoId)=>{
    db.deleteTodo(todoId)
    .then(todoId=>setTodos([...todos.filter(t=>t.id !== todoId)]))
  }
  
  const handleUpdate = (todoId,data)=>{    
    db.updateTodo(todoId, data)
    
  }
  const handleSelect = (todo)=>{
    setSelectedTodo(todo);
  }

  return (
    <div className="todo-list-page">
      <TodoList todos={todos} list={list} onDelete={handleDelete} onUpdate={handleUpdate} onSelect={handleSelect}/>
        <TodoForm onSubmit={handleSubmit} />  
        {selectedTodo && <TodoDetails todo={selectedTodo}/>}
    </div>
  )
}