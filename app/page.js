import Image from 'next/image'
import HomePage from './pages/HomePage'
import Header from './pages/Header'
import MessageList from './pages/MessageList'
import ChatInput from './pages/ChatInput'

export default function Home() {
  return (
    <div>
      <Header />
      <MessageList />
      <ChatInput />
    </div>
  )
}
