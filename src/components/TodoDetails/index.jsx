import React from 'react'


export default function TodoDetails({todo}) {
    return (
        <aside className="todo-details">
            {todo.title}
        </aside>
    )
}

