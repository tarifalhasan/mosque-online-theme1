import PillarsOfIslam from '@/components/Pillars Of Islam/pillars-of-islam'
import About from '@/components/about/about'
import OurEventsBlog from '@/components/events-blogs'
import HeaderMain from '@/components/header/heder-main'
import TopHeader from '@/components/header/top-header'
import Hero from '@/components/hero/hero'
import NamazTime from '@/components/namaz-time'
import OurGallery from '@/components/our-gallery'

export default function Home() {
  return (
    <main>
      <TopHeader />
      <HeaderMain />
      <div className=' space-y-8 lg:space-y-20'>
        <Hero />
        <NamazTime />
        <About />
        <PillarsOfIslam />
        <OurGallery />

        <div className='bg-[#E7F8F7]'>
          <OurEventsBlog />
        </div>
      </div>
    </main>
  )
}
