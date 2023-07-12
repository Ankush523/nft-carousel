import Image from 'next/image'
import { Inter } from 'next/font/google'
import NftCarousel from './NftCarousel'
const inter = Inter({ subsets: ['latin'] })

export default function Carousel() {
  return (
    <main>
      <NftCarousel address={'0xankush.eth'}/>
    </main>
  )
}
