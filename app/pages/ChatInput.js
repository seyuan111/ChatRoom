"use client"
import React, {useState} from 'react'

const ChatInput = () => {
    const [input, setInput] = useState("")

    const addMessage = (e) => {
        e.preventDefault();

        if(!input) return
        const messageToSend = input;

        setInput("")
    }

  return (
    <form onSubmit={addMessage} className="fixed w-full flex bottom-0 z-50 px-10 py-5 space-x-2 border-t border-gray-100">
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Message..." className="flex-1 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed" />
        <button disabled={!input} type="submit" className="bg-green-600 hover:bg-green-900 duration-75 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed">Send Message</button>
    </form>
  )
}

export default ChatInput