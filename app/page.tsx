import HeaderMain from '@/components/header/heder-main'
import TopHeader from '@/components/header/top-header'
import Hero from '@/components/hero/hero'
import NamazTime from '@/components/namaz-time'

export default function Home() {
  return (
    <main>
      <TopHeader />
      <HeaderMain />
      <Hero />
      <NamazTime />
    </main>
  )
}
