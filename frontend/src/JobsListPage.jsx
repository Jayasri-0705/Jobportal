import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
export default function JobsListPage() {
    const [jobs, setJobs] = useState([]);
    const username = localStorage.getItem("username");
    useEffect(() => {
        fetch("https://jobportal-de1u.onrender.com/jobs")
        .then(res => res.json())
        .then(setJobs)
        .catch(err => console.error("Failed to fetch jobs:",err))
    }, [])

    if (!username) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Please login first</h2>
                <p className="text-gray-600 mb-6">You need to be logged in to view and apply for jobs.</p>
                <NavLink to="/login" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 px-6 rounded transition">
                    Go to Login
                </NavLink>
            </div>
        )
    }

  return (
    <div className="min-h-screen flex flex-col">
   
  <header className="border-b bg-white">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
      <h1 className="text-xl font-bold text-blue-700">JobPortal</h1>
      {/* <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
        <a href="#" className="hover:text-blue-700">Jobs</a>
        <a href="#" className="hover:text-blue-700">Companies</a>
        <a href="#" className="hover:text-blue-700">My Applications</a>
      </nav> */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Hello, {username}</span>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-sm font-semibold text-white">
          {username ? username.charAt(0).toUpperCase(): "?"}
        </div>
      </div>
    </div>
  </header>
   
    <main className="mx-auto w-full max-w-7xl px-6 py-8 flex-1">
  
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Recommended Jobs</h2>
        <p className="mt-1 text-sm text-gray-500">Jobs based on your profile and preferences</p>
      </div>
     
      <div className="space-y-4">
        {/* Job Card*/}
        {jobs.length == 0 ? (
            <p className='text-gray-500'>No Jobs Found</p>)
            :jobs.map(job => (
        <div className="rounded-lg border bg-white p-5 transition hover:shadow-md">
          <h3 className="text-lg font-semibold text-blue-700">{job.title}</h3>
          <p className="mt-1 text-sm text-gray-700">{job.company}</p>
          <p className=" text-gray-700 text-xs">{new Date(job.posted_on).toLocaleDateString("en-US", {
            month:"short",
            day:"numeric",
            year:"numeric"
          })}</p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-600">
            <span className="rounded bg-gray-100 px-2 py-1">📍 {job.location}</span>
            <span className="rounded bg-gray-100 px-2 py-1">💰 {job.salary_range}</span>
            <span className="rounded bg-gray-100 px-2 py-1">🕒 Full Time</span>
          </div>
          <div className="mt-4 flex justify-end">
            <NavLink to={`/apply/${job.id}`} className="text-sm font-medium text-blue-700 hover:underline">View Details →</NavLink>
          </div>
        </div>  
            ))}
        
      
        
    
      </div>
    </main>
  
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-gray-500">
        © 2026 JobPortal.com | All rights reserved
      </div>
    </footer>
  </div>
  )
}
