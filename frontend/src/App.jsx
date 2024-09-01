import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Courses from './components/Courses'; 
import Home from './home/Home';
import Crs from './course/Crs';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/courses" element={<Crs/>}/>
      <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Toaster/>
      </div>
    </>
  ); 
}

export default App;
