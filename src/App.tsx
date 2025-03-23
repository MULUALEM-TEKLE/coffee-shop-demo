import { useState } from "react"

import HeroSection from "@/components/HeroSection"
import AboutUsSection from "@/components/AboutUsSection"
import ServicesSection from "@/components/ServicesSection"
import ProductsSection from "@/components/ProductsSection"
import LocationHoursSection from "@/components/LocationHoursSection"
import MenuSection from "@/components/MenuSection"
import Footer from "@/components/Footer"
import Carousel from "./components/Carousel"

const CafeWebsite = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const carouselImages = [
		"/images/4L8A0302.jpg",
		"/images/DSC_0052-scaled.webp",
		"/images/best-coffee-shops-in-cape-town.webp",
		"/images/the-importance-of-coffee-shops-in-communities-782577.jpg",
	]

	return (
		<div className="bg-gray-900 text-white font-sans">
			<header>
				<Carousel images={carouselImages} />
			</header>

			<HeroSection setIsMenuOpen={setIsMenuOpen} />

			<AboutUsSection />

			<ServicesSection />

			<ProductsSection />

			<LocationHoursSection />

			<MenuSection isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

			<Footer />
		</div>
	)
}

export default CafeWebsite
