import About from "@/components/about";
import Contact from "@/components/contact";
import OurEventsBlog from "@/components/events-blogs";
import Footer from "@/components/footer";
import HeaderMain from "@/components/header/heder-main";
import TopHeader from "@/components/header/top-header";
import Hero from "@/components/hero";
import NamazTime from "@/components/namaz-time";
import OurGallery from "@/components/our-gallery";
import PillarsOfIslam from "@/components/pillars-of-islam";

export default function Home() {
  return (
    <main>
      <TopHeader />
      <HeaderMain />
      <div className=" space-y-8 lg:space-y-20">
        <Hero />
        <NamazTime />
        <About />
        <PillarsOfIslam />
        <OurGallery />

        <div className="bg-[#E7F8F7]">
          <OurEventsBlog />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
}
