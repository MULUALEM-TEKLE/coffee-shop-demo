import React from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const LocationHoursSection = () => {
	return (
		<section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
				<div className="space-y-4">
					<h2 className="text-3xl sm:text-4xl font-bold text-white">Find Us</h2>
					<div className="flex items-center gap-2 text-gray-300">
						<MapPin className="w-6 h-6 text-amber-500" />
						<p>123 Coffee Bean Lane, Anytown, USA</p>
					</div>
					<div className="flex items-center gap-2 text-gray-300">
						<Phone className="w-6 h-6 text-amber-500" />
						<p>+1 (555) 123-4567</p>
					</div>
					<div className="flex items-center gap-2 text-gray-300">
						<Mail className="w-6 h-6 text-amber-500" />
						<p>info@yourcafe.com</p>
					</div>
				</div>
				<div className="space-y-4">
					<h2 className="text-3xl sm:text-4xl font-bold text-white">
						Hours of Operation
					</h2>
					<div className="space-y-2">
						<div className="flex justify-between items-center text-gray-300">
							<span>Monday - Friday:</span>
							<div className="flex items-center gap-2">
								<Clock className="w-5 h-5" />
								<span>7:00 AM - 8:00 PM</span>
							</div>
						</div>
						<div className="flex justify-between items-center text-gray-300">
							<span>Saturday:</span>
							<div className="flex items-center gap-2">
								<Clock className="w-5 h-5" />
								<span>8:00 AM - 8:00 PM</span>
							</div>
						</div>
						<div className="flex justify-between items-center text-gray-300">
							<span>Sunday:</span>
							<div className="flex items-center gap-2">
								<Clock className="w-5 h-5" />
								<span>9:00 AM - 5:00 PM</span>
							</div>
						</div>
					</div>
				</div>
				<div className="rounded-lg overflow-hidden md:col-span-2">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.784997597222!2d-122.41945!3d37.7749296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ2JzI5LjkiTiAxMjLCQzI1JzEwLjAiVw!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
						width="100%"
						height="450"
						style={{ border: 0 }}
						allowFullScreen={true}
						aria-hidden="false"
						tabIndex={0}
						title="Coffee Shop Location"
					></iframe>
				</div>
			</div>
		</section>
	)
}

export default LocationHoursSection
