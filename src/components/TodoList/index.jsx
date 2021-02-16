import React, {useContext, useState, useEffect} from 'react'
import DBContext from '../../context/db'

export default function TodoList({match}) {

    const [todos, setTodos] = useState([])
    console.log(match)
    const db = useContext(DBContext)
    useEffect(()=>{
        db.get('todos')(collection=>collection.where('ListId', '==', match.params.ListId))
        .then(setTodos)
       
    },[db, match.params.ListId])
    return (
        <ul>
          {todos.map((todo)=><li key={todo.id}>
            {todo.title}
          </li>)}
        </ul>
    )
}
