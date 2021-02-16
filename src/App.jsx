import logo from './logo.svg';
import { get } from './api';
import AppDrawer from './components/AppDrawer'
import AppContent from './components/AppContent'
import TodoListPage from './pages/TodoList'

import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import DBContext from './context/db';



export default function App() {
 
  const [lists, setLists] = useState([])
  useEffect(() => {
    get('lists')().then(setLists)
    


  }, [])
  return (
    <DBContext.Provider value={{lists, get}}>
      <div className="app">
        <AppDrawer lists={lists} />
        <AppContent>
          <Switch>
            <Route path='/:ListId' component={TodoListPage} />
          </Switch>
        </AppContent>
      </div>
    </DBContext.Provider>
  );
}


