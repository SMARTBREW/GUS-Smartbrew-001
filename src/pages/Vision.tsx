import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import PageHero from '../components/sections/PageHero';
import SubsectionTitle from '../components/ui/SubsectionTitle';
import InfoCard from '../components/ui/InfoCard';
import SEOHead from '../components/seo/SEOHead';

const VisionPage = () => {
	return (
		<PageLayout>
			<SEOHead
				title="Vision, Mission & Goals - Gramin Utthan Samiti NGO"
				description="Discover the vision, mission, and goals of Gramin Utthan Samiti. Learn about our commitment to rural development, women empowerment, and sustainable community transformation in Uttarakhand."
				keywords="NGO vision mission, rural development goals, women empowerment mission, Gramin Utthan Samiti vision, community development goals, Uttarakhand NGO mission"
				canonicalUrl="/vision"
			/>
			<PageHero 
				title="Vision, Mission & Goals"
				subtitle="Our guiding principles that drive our work in rural development and community empowerment."
			/>
			
			<section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Vision */}
					<div className="mb-12 sm:mb-16">
						<div className="max-w-4xl mx-auto">
							<SubsectionTitle title="Our Vision" />
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
								<InfoCard
									title="Future We Envision"
									content="To create self-sustaining, empowered rural communities where every individual has access to opportunities for growth, education, and dignified livelihoods while preserving the rich cultural heritage and natural resources of the Kumaon region."
									variant="highlighted"
								/>
								<InfoCard
									title="Community Empowerment"
									content="We envision empowered communities where every individual has access to opportunities for growth, education, and dignified livelihoods while preserving the rich cultural heritage and natural resources of the Kumaon region."
									variant="highlighted"
								/>
							</div>
						</div>
					</div>

					{/* Mission */}
					<div className="mb-12 sm:mb-16">
						<div className="max-w-4xl mx-auto">
							<div className="bg-gray-50 rounded-3xl p-6 sm:p-8 shadow">
								<h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-800 mb-4 sm:mb-6">Our Mission</h2>
								<p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
									G.U.S. takes a holistic approach to development work, focusing on the people's ecological, 
									social, cultural and economic needs. We help local communities identify their problems and 
									work together, mobilizing local resources to achieve their goals and take control of their lives.
								</p>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
									<div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
										<h3 className="text-lg sm:text-xl font-normal text-gray-800 mb-2 sm:mb-3">Community Empowerment</h3>
										<p className="text-sm sm:text-base text-gray-600">
											Supporting Village and Women's Groups to bring villagers together to discuss problems 
											and work collectively.
										</p>
									</div>
									<div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
										<h3 className="text-lg sm:text-xl font-normal text-gray-800 mb-2 sm:mb-3">Sustainable Development</h3>
										<p className="text-sm sm:text-base text-gray-600">
											Creating integrated village development plans that make communities self-aware and self-sustaining.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					{/* Goals */}
					<div className="mb-12 sm:mb-16">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">Our Goals</h2>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
								<div className="text-center">
									<div className="bg-gray-300 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
										<span className="text-xl sm:text-2xl">👥</span>
									</div>
									<h3 className="text-lg sm:text-xl font-normal text-gray-800 mb-2 sm:mb-3">Women Leadership</h3>
									<p className="text-sm sm:text-base text-gray-600">
										Empower women as leaders of their villages and catalysts of change in rural Kumaon.
									</p>
								</div>
								<div className="text-center">
									<div className="bg-gray-300 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
										<span className="text-xl sm:text-2xl">🌱</span>
									</div>
									<h3 className="text-lg sm:text-xl font-normal text-gray-800 mb-2 sm:mb-3">Livelihood Creation</h3>
									<p className="text-sm sm:text-base text-gray-600">
										Provide employment opportunities and sustainable livelihoods for rural communities.
									</p>
								</div>
								<div className="text-center">
									<div className="bg-gray-300 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
										<span className="text-xl sm:text-2xl">🏔️</span>
									</div>
									<h3 className="text-lg sm:text-xl font-normal text-gray-800 mb-2 sm:mb-3">Resource Conservation</h3>
									<p className="text-sm sm:text-base text-gray-600">
										Preserve and sustainably manage natural resources and cultural heritage.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Journey / Timeline */}
					<div className="mb-12 sm:mb-16">
						<div className="max-w-6xl mx-auto">
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-800 mb-6 sm:mb-8 text-center">Our Journey</h2>

							{/* Mobile-friendly stacked timeline */}
							<div className="md:hidden space-y-6">
								<div className="relative pl-8">
									<div className="absolute left-2 top-0 bottom-0 w-1 bg-red-200"></div>
									<div className="relative">
										<div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white absolute -left-3 top-1.5"></div>
										<h3 className="text-lg font-normal text-gray-800 mb-1 ml-2">1979</h3>
										<h4 className="text-base font-normal text-red-600 mb-2">Foundation Established</h4>
										<p className="text-sm text-gray-600">Gramin Utthan Samity (G.U.S.) was established in the Kumaon hills to address high migration due to lack of employment opportunities.</p>
										<div className="bg-gray-50 rounded-xl p-3 mt-3">
											<div className="text-lg font-bold text-red-600">1979</div>
											<div className="text-xs text-gray-600">Year of Establishment</div>
										</div>
									</div>
								</div>

								<div className="relative pl-8">
									<div className="absolute left-2 top-0 bottom-0 w-1 bg-red-200"></div>
									<div className="relative">
										<div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white absolute -left-3 top-1.5"></div>
										<h3 className="text-lg font-normal text-gray-800 mb-1 ml-2">1982-83</h3>
										<h4 className="text-base font-normal text-red-600 mb-2 ml-2">Official Registration</h4>
										<p className="text-sm text-gray-600">G.U.S. received official registration as a Not-for-Profit organization, marking the beginning of structured community development work.</p>
										<div className="bg-gray-50 rounded-xl p-3 mt-3">
											<div className="text-lg font-bold text-red-600">2407/1982-83</div>
											<div className="text-xs text-gray-600">Registration Number</div>
										</div>
									</div>
								</div>

								<div className="relative pl-8">
									<div className="absolute left-2 top-0 bottom-0 w-1 bg-red-200"></div>
									<div className="relative">
										<div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white absolute -left-3 top-1.5"></div>
										<h3 className="text-lg font-normal text-gray-800 mb-1 ml-2">1989</h3>
										<h4 className="text-base font-normal text-red-600 mb-2 ml-2">Khatta Village Housing Project</h4>
										<p className="text-sm text-gray-600">Construction of eight houses in Khatta Gram Sabha for economically disadvantaged families, impacting 40,000 people and establishing a sustainable development model.</p>
										<div className="bg-red-50 rounded-xl p-3 mt-3">
											<div className="text-lg font-bold text-red-600">8 Houses</div>
											<div className="text-xs text-gray-600">Built for Vulnerable Families</div>
											<div className="text-lg font-bold text-red-600 mt-1">40K+</div>
											<div className="text-xs text-gray-600">People Impacted</div>
										</div>
									</div>
								</div>

								<div className="relative pl-8">
									<div className="absolute left-2 top-0 bottom-0 w-1 bg-red-200"></div>
									<div className="relative">
										<div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white absolute -left-3 top-1.5"></div>
										<h3 className="text-lg font-normal text-gray-800 mb-1 ml-2">Recent</h3>
										<h4 className="text-base font-normal text-red-600 mb-2 ml-2">Emergency Relief Distribution</h4>
										<p className="text-sm text-gray-600">Under the leadership of Umesh Joshi, G.U.S. successfully conducted emergency relief programs, distributing ration to 58 families in the Kapkot constituency and Bageshwar district.</p>
										<div className="bg-gray-50 rounded-xl p-3 mt-3">
											<div className="text-lg font-bold text-red-600">58 Families</div>
											<div className="text-xs text-gray-600">Emergency Relief Provided</div>
											<div className="text-lg font-bold text-red-600 mt-1">Kapkot</div>
											<div className="text-xs text-gray-600">Constituency Served</div>
										</div>
									</div>
								</div>

								<div className="relative pl-8">
									<div className="absolute left-2 top-0 bottom-0 w-1 bg-red-200"></div>
									<div className="relative">
										<div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white absolute -left-3 top-1.5"></div>
										<h3 className="text-lg font-normal text-gray-800 mb-1 ml-2">Present</h3>
										<h4 className="text-base font-normal text-red-600 mb-2 ml-2">Ongoing Community Development</h4>
										<p className="text-sm text-gray-600">Serving 150+ remote villages in the Northern Kumaon Himalaya through holistic development programs, with 80% women workers leading community transformation.</p>
										<div className="bg-gray-50 rounded-xl p-3 mt-3">
											<div className="text-lg font-bold text-red-600">150+</div>
											<div className="text-xs text-gray-600">Villages Served</div>
											<div className="text-lg font-bold text-red-600 mt-1">80%</div>
											<div className="text-xs text-gray-600">Women Workers</div>
										</div>
									</div>
								</div>
							</div>

							{/* Desktop timeline retained */}
							<div className="hidden md:block relative">
								<div className="absolute left-[42%] transform -translate-x-1/2 w-1 bg-red-200 top-0 bottom-0 z-0"></div>
								<div className="space-y-12 relative">
									<div className="relative flex items-center">
										<div className="absolute left-[42%] transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
										<div className="w-5/12 pr-8 text-right relative z-20">
											<h3 className="text-xl font-normal text-gray-800 mb-2">1979</h3>
											<h4 className="text-lg font-normal text-red-600 mb-2">Foundation Established</h4>
											<p className="text-gray-600">
												Gramin Utthan Samity (G.U.S.) was established in the Kumaon hills to address high migration due to lack of employment opportunities.
											</p>
										</div>
										<div className="w-5/12 pl-8 relative z-20">
											<div className="bg-gray-50 rounded-xl p-4">
												<div className="text-2xl font-bold text-red-600 mb-1">1979</div>
												<div className="text-sm text-gray-600">Year of Establishment</div>
											</div>
										</div>
									</div>

									<div className="relative flex items-center">
										<div className="absolute left-[42%] transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
										<div className="w-5/12 pr-8 text-right relative z-20">
											<div className="bg-gray-50 rounded-xl p-4">
												<div className="text-2xl font-bold text-red-600 mb-1">2407/1982-83</div>
												<div className="text-sm text-gray-600">Registration Number</div>
											</div>
										</div>
										<div className="w-5/12 pl-8 relative z-20">
											<h3 className="text-xl font-normal text-gray-800 mb-2">1982-83</h3>
											<h4 className="text-lg font-normal text-red-600 mb-2">Official Registration</h4>
											<p className="text-gray-600">
												G.U.S. received official registration as a Not-for-Profit organization, marking the beginning of structured community development work.
											</p>
										</div>
									</div>

									<div className="relative flex items-center">
										<div className="absolute left-[42%] transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
										<div className="w-5/12 pr-8 text-right relative z-20">
											<h3 className="text-xl font-normal text-gray-800 mb-2">1989</h3>
											<h4 className="text-lg font-normal text-red-600 mb-2">Khatta Village Housing Project</h4>
											<p className="text-gray-600">
												Construction of eight houses in Khatta Gram Sabha for economically disadvantaged families, impacting 40,000 people and establishing a sustainable development model.
											</p>
										</div>
										<div className="w-5/12 pl-8 relative z-20">
											<div className="bg-red-50 rounded-xl p-4">
												<div className="text-2xl font-bold text-red-600 mb-1">8 Houses</div>
												<div className="text-sm text-gray-600">Built for Vulnerable Families</div>
												<div className="text-lg font-bold text-red-600 mt-2">40K+</div>
												<div className="text-sm text-gray-600">People Impacted</div>
											</div>
										</div>
									</div>

									<div className="relative flex items-center">
										<div className="absolute left-[42%] transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
										<div className="w-5/12 pr-8 text-right relative z-20">
											<div className="bg-red-50 rounded-xl p-4">
												<div className="text-2xl font-bold text-red-600 mb-1">58 Families</div>
												<div className="text-sm text-gray-600">Emergency Relief Provided</div>
												<div className="text-lg font-bold text-red-600 mt-2">Kapkot</div>
												<div className="text-sm text-gray-600">Constituency Served</div>
											</div>
										</div>
										<div className="w-5/12 pl-8 relative z-20">
											<h3 className="text-xl font-normal text-gray-800 mb-2">Recent</h3>
											<h4 className="text-lg font-normal text-red-600 mb-2">Emergency Relief Distribution</h4>
											<p className="text-gray-600">
												Under the leadership of Umesh Joshi, G.U.S. successfully conducted emergency relief programs, distributing ration to 58 families in the Kapkot constituency and Bageshwar district.
											</p>
										</div>
									</div>

									<div className="relative flex items-center">
										<div className="absolute left-[42%] transform -translate-x-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
										<div className="w-5/12 pr-8 text-right relative z-20">
											<h3 className="text-xl font-normal text-gray-800 mb-2">Present</h3>
											<h4 className="text-lg font-normal text-red-600 mb-2">Ongoing Community Development</h4>
											<p className="text-gray-600">
												Serving 150+ remote villages in the Northern Kumaon Himalaya through holistic development programs, with 80% women workers leading community transformation.
											</p>
										</div>
										<div className="w-5/12 pl-8 relative z-20">
											<div className="bg-gray-50 rounded-xl p-4">
												<div className="text-2xl font-bold text-red-600 mb-1">150+</div>
												<div className="text-sm text-gray-600">Villages Served</div>
												<div className="text-lg font-bold text-red-600 mt-2">80%</div>
												<div className="text-sm text-gray-600">Women Workers</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</PageLayout>
	);
};

export default VisionPage;
