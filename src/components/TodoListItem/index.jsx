import React from 'react'
// import DBContext from '../../context/db'
import { Icon, IconButton, ListItem, ListItemGraphic, ListItemText, ListItemMeta } from 'mdc-react'
import Checkbox from '@material/react-checkbox'

export default function TodoListItem({ todo, onDelete, onUpdate, onSelect }) {

    function handleChange() {

        onUpdate(todo.id, !todo.completed);
    }
    return (
        <ListItem>
            <ListItemGraphic>
                <Checkbox checked={todo.completed} onChange={handleChange}/>
            </ListItemGraphic>
            <ListItemText onClick={()=>onSelect(todo)}>
                {todo.title}
            </ListItemText>
            <ListItemMeta>
                <IconButton onClick={()=>onDelete(todo.id)}>
                    <Icon>delete</Icon>
                </IconButton>
            </ListItemMeta>
        </ListItem>



    )
}

