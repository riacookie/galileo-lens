export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
			<section className="py-20 px-4">
				<div className="container mx-auto text-center">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
							Explore our Universe
						</h2>
						<p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
							Discover intriguing insights about our universe, spanning from
							Earth to the Moon and satellites. Galileo Lens leverages
							NASA&apos;s observation APIs to deliver the latest data, including
							stunning satellite imagery.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
