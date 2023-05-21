import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Detail from './Pages/Detail'
import Form from './Pages/Form'
import Forms from './Pages/Forms'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:slug" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="dashboard/users/:id" element={<Detail />} />
        <Route path="/form" element={<Form/>} />
        <Route path="/forms" element={<Forms/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
