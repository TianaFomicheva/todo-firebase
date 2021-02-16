import React, { useContext, useState, useEffect } from 'react'
import DBContext from '../../context/db'
import { List} from 'mdc-react'
import  {Headline4} from '@material/react-typography'
import TodoListItem from '../TodoListItem'
import './index.scss'

export default function TodoList({list, todos }) {

  
  return (
    <div className="todo-list">
      <Headline4 className="todo-list__title" >{list.title}</Headline4>

      <List className="todo=list__items">
        {todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)}
      </List>
    </div>
  )
}
