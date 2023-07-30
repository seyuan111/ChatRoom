import Image from 'next/image'
import HomePage from './pages/HomePage'
import Header from './pages/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  )
}
