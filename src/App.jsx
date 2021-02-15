import logo from './logo.svg';
import {db} from './firebase';
// import {Typography} from 'mdc-react';
import AppDrawer from './components/AppDrawer'
import AppContent from './components/AppContant'

import React, {useState, useEffect} from 'react';
import './App.scss';



export default function App() {
  const[todos, setTodos] = useState([])
  useEffect(()=>{db.collection("todos")
  .get()
  .then((querySnapshot) => {
    const todos = querySnapshot.docs.map((doc)=>({
      id: doc.id,
      ...doc.data()
    }))
    console.log({todos})
    setTodos(todos)
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
  });

  },[])
  return (
    <div className="app">
       <AppDrawer />


      <AppContent> 
        <ul>
          {todos.map((todo)=><li key={todo.id}>
            {todo.title}
          </li>)}
        </ul>
      </AppContent>
    </div>

  );
}


