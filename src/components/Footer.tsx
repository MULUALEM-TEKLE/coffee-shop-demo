import React from "react"

const Footer = () => {
	return (
		<footer className="bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto text-center text-gray-400">
				<p>
					&copy; {new Date().getFullYear()} Your Daily Dose. All rights
					reserved.
				</p>
				<p className="mt-2">
					<a
						href="https://yourwebsite.com" // Replace with actual website
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-amber-400 transition-colors"
					>
						yourwebsite.com
					</a>
				</p>
			</div>
		</footer>
	)
}

export default Footer
