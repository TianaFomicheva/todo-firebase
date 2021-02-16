import React from 'react'
// import DBContext from '../../context/db'
import {  ListItem, ListItemGraphic, ListItemText} from 'mdc-react'
import Checkbox from '@material/react-checkbox'

export default function TodoListItem({ todo }) {


    return (
        <ListItem>
            <ListItemGraphic>
                <Checkbox checked={todo.completed}  />
            </ListItemGraphic>
            <ListItemText>
                {todo.title}
            </ListItemText>
        </ListItem>



    )
}

