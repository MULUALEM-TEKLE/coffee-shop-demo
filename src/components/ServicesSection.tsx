import React, { useState } from "react"
import { motion } from "framer-motion"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Coffee, Cake } from "lucide-react"
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog"

// Reusable animation variants
const fadeUpVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeInOut" },
	},
}

const ServicesSection = () => {
	const [openDineIn, setOpenDineIn] = useState(false)
	const [openTakeout, setOpenTakeout] = useState(false)
	const [openCatering, setOpenCatering] = useState(false)

	return (
		<section className="bg-gray-800 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto text-center space-y-8">
				<h2 className="text-3xl sm:text-4xl font-bold text-white">
					Services as Smooth as Our Coffee
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Dine-In Card */}
					<motion.div
						variants={fadeUpVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<Dialog open={openDineIn} onOpenChange={setOpenDineIn}>
							<DialogTrigger asChild>
								<Card className="bg-gray-900 border-gray-700 hover:shadow-lg transition-shadow duration-300">
									<CardHeader>
										<Coffee className="w-12 h-12 text-amber-500 mx-auto mb-4" />
										<CardTitle className="text-white text-xl text-center">
											Dine-In
										</CardTitle>
										<CardDescription className="text-gray-300 text-center">
											Enjoy our cozy ambiance and savor your favorite brews.
										</CardDescription>
									</CardHeader>
								</Card>
							</DialogTrigger>
							<DialogContent className="bg-gray-800 text-white">
								<DialogHeader>
									<DialogTitle>Dine-In Experience</DialogTitle>
									<DialogDescription>
										Relax and enjoy our cozy atmosphere while savoring your
										favorite coffee.
										<img
											src="/images/best-coffee-shops-in-cape-town.webp"
											alt="Dine-In"
											className="mt-4 rounded-md"
										/>
										<p className="mt-2 text-gray-300">
											Experience the rich aroma and exquisite taste of our
											freshly brewed coffee in a relaxed setting. Our baristas
											are passionate about crafting the perfect cup just for
											you.
										</p>
									</DialogDescription>
								</DialogHeader>
							</DialogContent>
						</Dialog>
					</motion.div>

					{/* Takeout Card */}
					<motion.div
						variants={fadeUpVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<Dialog open={openTakeout} onOpenChange={setOpenTakeout}>
							<DialogTrigger asChild>
								<Card className="bg-gray-900 border-gray-700 hover:shadow-lg transition-shadow duration-300">
									<CardHeader>
										<Coffee className="w-12 h-12 text-amber-500 mx-auto mb-4" />
										<CardTitle className="text-white text-xl text-center">
											Takeout
										</CardTitle>
										<CardDescription className="text-gray-300 text-center">
											Grab your coffee and treats on the go.
										</CardDescription>
									</CardHeader>
								</Card>
							</DialogTrigger>
							<DialogContent className="bg-gray-800 text-white">
								<DialogHeader>
									<DialogTitle>Takeout Service</DialogTitle>
									<DialogDescription>
										Get your favorite coffee and treats to go. Perfect for a
										busy day!
										<img
											src="/images/images (1).jpeg"
											alt="Takeout"
											className="mt-4 rounded-md"
										/>
										<p className="mt-2 text-gray-300">
											Need a quick caffeine fix? Our takeout service ensures you
											don't have to compromise on quality, even when you're on
											the move.
										</p>
									</DialogDescription>
								</DialogHeader>
							</DialogContent>
						</Dialog>
					</motion.div>

					{/* Catering Card */}
					<motion.div
						variants={fadeUpVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<Dialog open={openCatering} onOpenChange={setOpenCatering}>
							<DialogTrigger asChild>
								<Card className="bg-gray-900 border-gray-700 hover:shadow-lg transition-shadow duration-300">
									<CardHeader>
										<Cake className="w-12 h-12 text-amber-500 mx-auto mb-4" />
										<CardTitle className="text-white text-xl text-center">
											Catering
										</CardTitle>
										<CardDescription className="text-gray-300 text-center">
											Let us bring the coffee experience to your event.
										</CardDescription>
									</CardHeader>
								</Card>
							</DialogTrigger>
							<DialogContent className="bg-gray-800 text-white">
								<DialogHeader>
									<DialogTitle>Catering Service</DialogTitle>
									<DialogDescription>
										We bring the coffee experience to your events. Contact us
										for details!
										<img
											src="/images/istockphoto-1428594094-612x612.jpg"
											alt="Catering"
											className="mt-4 rounded-md"
										/>
										<p className="mt-2 text-gray-300">
											Elevate your event with our premium coffee catering
											service. From corporate gatherings to private parties,
											we've got you covered.
										</p>
									</DialogDescription>
								</DialogHeader>
							</DialogContent>
						</Dialog>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default ServicesSection
