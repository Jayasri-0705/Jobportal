import { useState } from 'react'
import './App.css'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'
import JobsListPage from './JobsListPage'
import ApplyjobPage from './ApplyjobPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
 
  return (
    <BrowserRouter>
	  <Routes>
                 <Route path='/' element={<LoginPage/>} />
                 <Route path='/register' element={<RegisterPage/>} />
                 <Route path='/login' element={<LoginPage/>} />
                 <Route path='/jobs' element={<JobsListPage/>} />
                 <Route path='/apply/:jobId' element={<ApplyjobPage/>} />
         </Routes>
    </BrowserRouter>
  )
}

export default App
