import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// Reusable animation variants
const fadeUpVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.8, ease: "easeInOut" },
	},
}

interface HeroSectionProps {
	setIsMenuOpen: (isOpen: boolean) => void
}

const HeroSection = ({ setIsMenuOpen }: HeroSectionProps) => {
	return (
		<section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto text-center space-y-4">
				<motion.div
					variants={fadeUpVariants}
					initial="hidden"
					animate="visible"
					transition={{ duration: 0.8, ease: "easeInOut" }}
					className="space-y-4"
				>
					<h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
						Your Daily Dose
					</h1>
					<p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
						Fuel your day with our expertly crafted coffee and delicious treats.
					</p>
					<Button
						variant="default"
						size="lg"
						className="bg-amber-500 text-white hover:bg-amber-600 transition-colors duration-300
                                       shadow-lg hover:shadow-xl"
						onClick={() => setIsMenuOpen(true)}
					>
						Explore Our Menu
					</Button>
				</motion.div>
			</div>
		</section>
	)
}

export default HeroSection
