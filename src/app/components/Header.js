import { Home as HomeIcon, Search, Library } from 'lucide-react'

export function Header() {
  return (
    <header className="hidden sm:block w-40 lg:w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-5 mt-10">
        <a
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-100"
          href=""
        >
          <HomeIcon /> Home
        </a>
        <a
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-100"
          href=""
        >
          <Search /> Search
        </a>
        <a
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-100"
          href=""
        >
          <Library /> You Library
        </a>
      </nav>

      <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          My Playlist
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Top Brasil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Top Internacional
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Eletronica
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Daily Mix
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hits Internet
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hot Hit Brasil
        </a>
      </nav>
    </header>
  )
}
