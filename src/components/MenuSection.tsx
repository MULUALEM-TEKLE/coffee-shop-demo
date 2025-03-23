import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Coffee, Cake, XCircle } from "lucide-react"

interface MenuSectionProps {
	isMenuOpen: boolean
	setIsMenuOpen: (isOpen: boolean) => void
}

const MenuSection = ({ isMenuOpen, setIsMenuOpen }: MenuSectionProps) => {
	return (
		<>
			{isMenuOpen && (
				<div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
					>
						<div className="relative">
							<img
								src="/images/best-coffee-shops-in-cape-town.webp"
								alt="Menu Header"
								className="w-full h-32 rounded-t-xl object-cover"
							/>
							<Button
								variant="ghost"
								onClick={() => setIsMenuOpen(false)}
								className="absolute top-2 left-2 text-white hover:text-red-500"
							>
								<XCircle
									className="w-10 h-10 stroke-2"
									style={{ strokeWidth: "2.5px" }}
								/>
							</Button>
						</div>
						<div className="p-6">
							<div className="flex justify-between items-center mb-6">
								<h2 className="text-3xl font-bold text-white">Our Menu</h2>
							</div>

							{/* Coffee Section */}
							<div className="mb-8">
								<h3 className="text-2xl font-semibold text-amber-400 mb-4 flex items-center gap-2">
									<Coffee className="w-6 h-6" />
									Coffee
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<h4 className="text-lg font-medium text-white">Espresso</h4>
										<p className="text-gray-400">
											Rich, intense, and full-bodied.
										</p>
									</div>
									<div>
										<h4 className="text-lg font-medium text-white">Latte</h4>
										<p className="text-gray-400">
											Smooth and creamy, with steamed milk.
										</p>
									</div>
									<div>
										<h4 className="text-lg font-medium text-white">
											Cappuccino
										</h4>
										<p className="text-gray-400">
											Equal parts espresso, milk, and foam.
										</p>
									</div>
									<div>
										<h4 className="text-lg font-medium text-white">
											Iced Coffee
										</h4>
										<p className="text-gray-400">
											Chilled coffee served over ice.
										</p>
									</div>
								</div>
							</div>

							{/* Pastries Section */}
							<div>
								<h3 className="text-2xl font-semibold text-amber-400 mb-4 flex items-center gap-2">
									<Cake className="w-6 h-6" />
									Pastries
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<h4 className="text-lg font-medium text-white">
											Croissant
										</h4>
										<p className="text-gray-400">
											Flaky, buttery, and golden brown.
										</p>
									</div>
									<div>
										<h4 className="text-lg font-medium text-white">Muffin</h4>
										<p className="text-gray-400">
											Blueberry, chocolate chip, or seasonal flavors.
										</p>
									</div>
									<div>
										<h4 className="text-lg font-medium text-white">Scone</h4>
										<p className="text-gray-400">Served with jam and cream.</p>
									</div>
									<div>
										<h4 className="text-lg font-medium text-white">Cake</h4>
										<p className="text-gray-400">Delicious assorted cakes.</p>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</>
	)
}

export default MenuSection
