import React from 'react';
import { Outlet } from 'react-router-dom';
import "./App.module.css";
import Navbar from './navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
