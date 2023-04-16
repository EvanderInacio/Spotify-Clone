import Image from 'next/image'

export function Music() {
  return (
    <a href='' className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2">
      <Image
        className="w-full "
        width={120}
        height={120}
        src="/daily.jpg"
        alt="Daily Music"
      />
      <strong className='font-semibold '>Daily Mix 6</strong>
      <span className='text-sm text-zinc-400 '>Wallows, COIN, girl in red and more</span>
    </a>
  )
}
