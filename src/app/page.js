import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Header } from './components/Header'
import { Album } from './components/Album'
import { Music } from './components/Music'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <div className="h-screen flex flex-col ">
      <div className="flex flex-1">
        <Header />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1 ">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1 ">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-5">
            <Album name="Wasting Light" />
            <Album name="Wasting Light" />
            <Album name="Wasting Light" />
            <Album name="Wasting Light" />
            <Album name="Wasting Light" />
            <Album name="Wasting Light" />
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Evander</h2>

          <div className="grid grid-cols-5 gap-4 mt-4 ">
            <Music />
            <Music />
            <Music />
            <Music />
            <Music />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
