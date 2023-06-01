
import Layout from "../components/Layout"
import FeaturesBlocks from "../components/Corporate/services/FeaturesBlock"
import { Footer } from "../components"
import HeroHome from "../components/Corporate/hero/HeroHome"
import AboutUs from "../components/Corporate/about/AboutUs"

export default function Home() {

  return (
    <Layout enableCustomCursor={true} enableNavbar={true}>
      <HeroHome />
      <FeaturesBlocks />
      <AboutUs />
      <Footer />
    </Layout>
  )
}
