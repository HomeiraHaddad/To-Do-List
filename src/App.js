import React from 'react'
import './App.css';
import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import TodoList from './todo/todo-list';
import AboutPage from './todo/page/about-page';
import TodoListEn from './todo/todo-list-en';
import AboutPageEn from './todo/page/about-page-en';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodoListEn/>}/>
        <Route path='/fa' element={<TodoList/>}/>
        <Route path='/en' element={<TodoListEn/>}/>
        <Route path='about/fa' element={<AboutPage/>}/>
        <Route path='about/en' element={<AboutPageEn/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
