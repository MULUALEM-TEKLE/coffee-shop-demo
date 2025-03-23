import React, { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Carousel Component
const Carousel = ({ images }: { images: string[] }) => {
	const [current, setCurrent] = useState(0)
	const length = images.length
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

	const nextSlide = useCallback(() => {
		setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1))
	}, [length])

	const prevSlide = () => {
		setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1))
	}

	useEffect(() => {
		timerRef.current = setInterval(nextSlide, 5000) // Auto-scroll every 5 seconds

		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current)
			}
		}
	}, [nextSlide])

	// Optional: Reset timer on manual navigation
	const resetTimer = () => {
		if (timerRef.current) {
			clearInterval(timerRef.current)
		}
		timerRef.current = setInterval(nextSlide, 5000)
	}

	useEffect(() => {
		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current)
			}
		}
	}, [nextSlide])

	return (
		<div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
			{/* Carousel Images */}
			<AnimatePresence>
				{images.map(
					(image, index) =>
						index === current && (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -50 }}
								transition={{ duration: 0.8, ease: "easeInOut" }}
								className="absolute inset-0 w-full h-full"
							>
								<img
									src={image}
									alt={`Carousel Slide ${index + 1}`}
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-black/30" />{" "}
								{/* Optional overlay */}
							</motion.div>
						)
				)}
			</AnimatePresence>

			{/* Carousel Controls */}
			<div className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2">
				<Button
					variant="ghost"
					size="icon"
					onClick={() => {
						prevSlide()
						resetTimer()
					}}
					className="text-white hover:bg-white/20"
				>
					<ChevronLeft className="w-8 h-8" />
				</Button>
			</div>
			<div className="absolute z-10 right-4 top-1/2 transform -translate-y-1/2">
				<Button
					variant="ghost"
					size="icon"
					onClick={() => {
						nextSlide()
						resetTimer()
					}}
					className="text-white hover:bg-white/20"
				>
					<ChevronRight className="w-8 h-8" />
				</Button>
			</div>
		</div>
	)
}

export default Carousel
