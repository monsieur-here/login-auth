import './App.css';
import React from "react"
import Layout from './components/Layout';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom"
import Login from './pages/Login';
import { AuthContextProvider } from './components/AuthContext';
import TaskForm from './store/taskForm';
import TaskDetails from './store/taskDetails';

function App() {
  return (
    <AuthContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />} ></Route>
        </Routes>
      </Layout>
    </AuthContextProvider>
    
  );
}

export default App;
