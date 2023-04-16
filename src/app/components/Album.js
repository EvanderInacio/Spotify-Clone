import { Play } from 'lucide-react'
import Image from 'next/image'

export function Album({ name }) {
  return (
    <a
      href=""
      className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
    >
      <Image
        width={104}
        height={104}
        src="/album.jpg"
        alt="Capa do album Wasting Light"
      />
      <strong>{name}</strong>
      <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 pl-1 invisible group-hover:visible'>
        <Play />
      </button>
    </a>
  )
}
