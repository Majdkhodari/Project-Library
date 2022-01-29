import './App.css';
import React from 'react';
import MemberList from './Components/MemberList';
import Home from './Components/Home';
import BookList from './Components/BookList';
import Nav from './Components/Nav';
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/MemberList" element={<MemberList />}/>
          <Route path="/BookList" element={<BookList/>}/>
        </Routes>
      <Nav />
    </div>
  );
}

export default App;
