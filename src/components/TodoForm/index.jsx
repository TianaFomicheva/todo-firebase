import React, {useState} from 'react'

import {TextField} from '@rmwc/textfield';

export default function TodoForm({onSubmit}) {
    const [title, setTitle] = useState('')
const handleSubmit = (event)=>{
    event.preventDefault()
    onSubmit(title)
    setTitle('');

}
const handleTitle = (e)=>{
    setTitle(e.target.value)
}
    return (
        <form onSubmit={handleSubmit}>
           <TextField fullwidth placeholder="Добавить задачу" value={title} onChange={handleTitle}/> 
               
           
        </form>
    )
}

