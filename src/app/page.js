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

          <div className="grid gap-4 mt-5 lg:grid-cols-3">
            <Album name="Daily 1" img={"/daily1.jpg"} />
            <Album name="Wasting Light" img={"/wasting.jpg"} />
            <Album name="Top Brasil" img={"/top-brasil.jpg"} />
            <Album name="Daily 5" img={"/daily5.jpg"} />
            <Album name="Top Hits" img={"/top-hits.jpg"} />
            <Album name="Daily 2" img={"/daily2.jpg"} />
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Evander</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 ">
            <Music name="Daily 3" img={"/daily3.jpg"} />
            <Music name="Daily 4" img={"/daily4.jpg"} />
            <Music name="Daily 5" img={"/daily5.jpg"} />
            <Music name="Daily 6" img={"/daily6.jpg"} />
            <Music name="Daily 2" img={"/daily2.jpg"} />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
