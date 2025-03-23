import React from "react"
import { motion } from "framer-motion"

// Reusable animation variants
const fadeLeftVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: "easeInOut" },
	},
}

const fadeUpVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeInOut" },
	},
}

const AboutUsSection = () => {
	return (
		<section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
				<motion.div
					variants={fadeLeftVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="space-y-4"
				>
					<h2 className="text-3xl sm:text-4xl font-bold text-white">
						A Story Brewed with Passion
					</h2>
					<p className="text-gray-300 text-lg">
						We're more than just a cafe; we're a community. Founded in [Year],
						our journey began with a simple love for coffee and a desire to
						create a welcoming space for everyone. Every cup we serve is a
						testament to our dedication to quality, sustainability, and the
						perfect brew.
					</p>
					<p className="text-gray-300 text-lg">
						From sourcing the finest beans to crafting our signature blends, we
						pour our heart into every step. Join us and experience the warmth of
						our hospitality and the rich flavors of our passion.
					</p>
				</motion.div>
				<motion.div
					variants={fadeUpVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="rounded-lg overflow-hidden shadow-2xl"
				>
					<img
						src="/images/download (1).jpeg"
						alt="About Us"
						className="w-full h-auto object-cover"
					/>
				</motion.div>
			</div>
		</section>
	)
}

export default AboutUsSection
