"use client"
import React from 'react'

const LogOutButton = () => {
  return (
    <button onClick={() => console.log("Logged Out")} className="bg-green-600 hover:bg-green-900 duration-75 text-white font-bold px-4 py-2 rounded">
        Sign Out
    </button>
  )
}

export default LogOutButton