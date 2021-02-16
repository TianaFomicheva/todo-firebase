import React, { useContext, useState, useEffect } from 'react'
import DBContext from '../context/db'
import { List} from 'mdc-react'
import  {Headline4} from '@material/react-typography'
import TodoListItem from '../components/TodoListItem'
import  MDSpinner from 'react-md-spinner'
import TodoList from '../components/TodoList'

export default function TodoListPage({ match }) {

  const [todos, setTodos] = useState([])
  const db = useContext(DBContext)
  useEffect(() => {
    db.get('todos')(collection => collection.where('ListId', '==', match.params.ListId))
      .then(setTodos)
      .then(console.log(match.params.ListId))
  }, [db, match.params.ListId])
  const list = db.lists.find(list => list.id === match.params.ListId)
  if (!list || !todos) return <MDSpinner />
  return (
    <div className="todo-list">
        <TodoList todos={todos} list={list} />      
    </div>
  )
}