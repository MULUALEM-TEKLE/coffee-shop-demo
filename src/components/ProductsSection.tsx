import React from "react"
import { motion } from "framer-motion"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

// Reusable animation variants
const fadeUpVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeInOut" },
	},
}

const ProductsSection = () => {
	return (
		<section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto text-center space-y-8">
				<h2 className="text-3xl sm:text-4xl font-bold text-white">
					Our Signature Products
				</h2>
				<p className="text-gray-300 text-lg max-w-3xl mx-auto">
					Experience the taste of perfection with our carefully crafted coffee
					blends and delicious pastries. We use only the finest ingredients to
					ensure every bite and sip is a moment of pure bliss.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Product Card 1 */}
					<motion.div
						variants={fadeUpVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<Card className="bg-gray-800 border-gray-700 hover:shadow-lg transition-shadow duration-300">
							<img
								src="/images/images (1).jpeg"
								alt="Iced Latte"
								className="w-full h-48 object-cover rounded-t-lg"
							/>
							<CardHeader>
								<CardTitle className="text-white text-xl">Iced Latte</CardTitle>
								<CardDescription className="text-gray-300">
									Our most popular blend, with rich, complex flavors.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-gray-400">Perfect for any time of day.</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* Product Card 2 */}
					<motion.div
						variants={fadeUpVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<Card className="bg-gray-800 border-gray-700 hover:shadow-lg transition-shadow duration-300">
							<img
								src="/images/istockphoto-1428594094-612x612.jpg"
								alt="Assorted Pastries"
								className="w-full h-48 object-cover rounded-t-lg"
							/>
							<CardHeader>
								<CardTitle className="text-white text-xl">
									Assorted Pastries
								</CardTitle>
								<CardDescription className="text-gray-300">
									A selection of our finest baked goods.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-gray-400">Freshly baked daily.</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* Product Card 3 */}
					<motion.div
						variants={fadeUpVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<Card className="bg-gray-800 border-gray-700 hover:shadow-lg transition-shadow duration-300">
							<img
								src="/images/sddefault.jpg"
								alt="Iced Latte"
								className="w-full h-48 object-cover rounded-t-lg"
							/>
							<CardHeader>
								<CardTitle className="text-white text-xl">Iced Latte</CardTitle>
								<CardDescription className="text-gray-300">
									Perfect for a refreshing treat.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-gray-400">Chilled and creamy.</p>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default ProductsSection
