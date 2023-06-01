import React from 'react';

type Post = {
	avatar: string,
	name: string,
	content: string
};

const Review:React.FC<{ item: Post }> = ({ item }) => {
	
	return (
		<div className="py-2.5 pr-5 w-full">
			<div className="p-6 rounded-lg h-full border-2 border-dark-500 dark:bg-dark-500">
				<div className="flex items-center mb-4">
					<div className="w-[45px] h-[45px] text-white-100 rounded-full bg-blue-200 leading-[45px] text-center uppercase">
						{ item.avatar }
					</div>
					<div className="ml-4">
						<span className="leading-none ">{item.name}</span>
						<div className="leading-none">
							<svg className="inline-block text-blue-200" xmlns="http://www.w3.org/2000/svg" width="19.452" height="18.41" viewBox="0 0 19.452 18.41">
								<path d="M24.126,30.239l4.226-1.071,1.766,5.442Zm9.726-7.034H26.413L24.126,16.2l-2.287,7.005H14.4l6.021,4.342-2.287,7.005,6.021-4.342,3.705-2.663,5.992-4.342Z" transform="translate(-14.4 -16.2)" fill="currentColor"/>
							</svg>
							<svg className="inline-block text-blue-200" xmlns="http://www.w3.org/2000/svg" width="19.452" height="18.41" viewBox="0 0 19.452 18.41">
								<path d="M24.126,30.239l4.226-1.071,1.766,5.442Zm9.726-7.034H26.413L24.126,16.2l-2.287,7.005H14.4l6.021,4.342-2.287,7.005,6.021-4.342,3.705-2.663,5.992-4.342Z" transform="translate(-14.4 -16.2)" fill="currentColor"/>
							</svg>
							<svg className="inline-block text-blue-200" xmlns="http://www.w3.org/2000/svg" width="19.452" height="18.41" viewBox="0 0 19.452 18.41">
								<path d="M24.126,30.239l4.226-1.071,1.766,5.442Zm9.726-7.034H26.413L24.126,16.2l-2.287,7.005H14.4l6.021,4.342-2.287,7.005,6.021-4.342,3.705-2.663,5.992-4.342Z" transform="translate(-14.4 -16.2)" fill="currentColor"/>
							</svg>
							<svg className="inline-block text-blue-200" xmlns="http://www.w3.org/2000/svg" width="19.452" height="18.41" viewBox="0 0 19.452 18.41">
								<path d="M24.126,30.239l4.226-1.071,1.766,5.442Zm9.726-7.034H26.413L24.126,16.2l-2.287,7.005H14.4l6.021,4.342-2.287,7.005,6.021-4.342,3.705-2.663,5.992-4.342Z" transform="translate(-14.4 -16.2)" fill="currentColor"/>
							</svg>
							<svg className="inline-block text-blue-200" xmlns="http://www.w3.org/2000/svg" width="19.452" height="18.41" viewBox="0 0 19.452 18.41">
								<path d="M24.126,30.239l4.226-1.071,1.766,5.442Zm9.726-7.034H26.413L24.126,16.2l-2.287,7.005H14.4l6.021,4.342-2.287,7.005,6.021-4.342,3.705-2.663,5.992-4.342Z" transform="translate(-14.4 -16.2)" fill="currentColor"/>
							</svg>
						</div>
					</div>
				</div>
				<p>
					{ item.content }
				</p>
			</div>
		</div>

	)
}

function ReviewsSection() {
	return (
		<section className="relative bg-white-200 dark:bg-transparent overflow-hidden">
			<div className="relative container mx-auto">
				<div className="flex flex-wrap">
					<div className="w-1/4 hidden md:block relative">
						<div className="absolute w-full animate-[reviews_20s_linear_infinite]">
							<Review item={{
								avatar: 'ga',
								name: 'GameETX',
								content: "The most High quality servers, I'm recommend to purchase their server."
							}} />
							<Review item={{
								avatar: 'ga',
								name: 'GameETX',
								content: "The most High quality servers, I'm recommend to purchase their server."
							}} />
							<Review item={{
								avatar: 'ga',
								name: 'GameETX',
								content: "The most High quality servers, I'm recommend to purchase their server."
							}} />
							<Review item={{
								avatar: 'ga',
								name: 'GameETX',
								content: "The most High quality servers, I'm recommend to purchase their server."
							}} />
							<Review item={{
								avatar: 'ga',
								name: 'GameETX',
								content: "The most High quality servers, I'm recommend to purchase their server."
							}} />
							<Review item={{
								avatar: 'ga',
								name: 'GameETX',
								content: "The most High quality servers, I'm recommend to purchase their server."
							}} />
							<Review item={{
								avatar: 'ga',
								name: 'GameETX',
								content: "The most High quality servers, I'm recommend to purchase their server."
							}} />
						</div>
					</div>
					<div className="w-1/4 hidden md:block relative">
						<div className="md:absolute w-full md:animate-[reviews_20s_linear_infinite]">
							<Review item={{
								avatar: 'iz',
								name: 'Izaac',
								content: "Really good service and very nice support staff when you need them when your stuck with something"
							}} />
							<Review item={{
								avatar: 'iz',
								name: 'Izaac',
								content: "Really good service and very nice support staff when you need them when your stuck with something"
							}} />
							<Review item={{
								avatar: 'iz',
								name: 'Izaac',
								content: "Really good service and very nice support staff when you need them when your stuck with something"
							}} />
							<Review item={{
								avatar: 'iz',
								name: 'Izaac',
								content: "Really good service and very nice support staff when you need them when your stuck with something"
							}} />
							<Review item={{
								avatar: 'iz',
								name: 'Izaac',
								content: "Really good service and very nice support staff when you need them when your stuck with something"
							}} />
							<Review item={{
								avatar: 'iz',
								name: 'Izaac',
								content: "Really good service and very nice support staff when you need them when your stuck with something"
							}} />
							<Review item={{
								avatar: 'iz',
								name: 'Izaac',
								content: "Really good service and very nice support staff when you need them when your stuck with something"
							}} />
						</div>
					</div>
					<div className="w-full md:w-5/12 md:ml-auto py-[100px]">
						<h2 className="h2 mb-4 text-4xl md:text-[40px] font-extrabold text-dark-100 dark:text-white-100 tracking-tight capitalize">Trusted by many gamers</h2>
						<p className="mb-8 md:text-xl text-dark-300 dark:text-white-300 leading-relaxed">
							Just look at all of our happy customers who decided to leave a review! These customers are creating their empires, so why aren&atos;t you? I guess we&atos;ll have to persuade you... Your empire is awaiting you.
						</p>
						<div className="grid gap-6 md:grid-cols-2 items-start">
							<div className="p-6 rounded-lg h-full border-2 border-dark-500 dark:bg-dark-500">
								<h4 className="text-4xl md:text-4xl font-bold leading-snug tracking-tight mb-5">2000</h4>
								<p className="text-xl font-bold dark:text-white-200 uppercase">
									GB Memory
								</p>
							</div>
							<div className="p-6 rounded-lg h-full border-2 border-dark-500 dark:bg-dark-500">
								<h4 className="text-4xl md:text-4xl font-bold leading-snug tracking-tight mb-5">100</h4>
								<p className="text-xl font-bold dark:text-white-200 uppercase">
									TB Storage
								</p>
							</div>
							<div className="p-6 rounded-lg h-full border-2 border-dark-500 dark:bg-dark-500">
								<h4 className="text-4xl md:text-4xl font-bold leading-snug tracking-tight mb-5">5000+</h4>
								<p className="text-xl font-bold dark:text-white-200 uppercase">
									Total Orders
								</p>
							</div>
							<div className="p-6 rounded-lg h-full border-2 border-dark-500 dark:bg-dark-500">
								<h4 className="text-4xl md:text-4xl font-bold leading-snug tracking-tight mb-5">10k</h4>
								<p className="text-xl font-bold dark:text-white-200 uppercase">
									Answered Questions
								</p>
							</div>
						</div>
					</div>
					<div className="relative md:hidden mb-8">
						<Review item={{
							avatar: 'iz',
							name: 'Izaac',
							content: "Really good service and very nice support staff when you need them when your stuck with something"
						}} />
						<Review item={{
							avatar: 'iz',
							name: 'Izaac',
							content: "Really good service and very nice support staff when you need them when your stuck with something"
						}} />
						<Review item={{
							avatar: 'iz',
							name: 'Izaac',
							content: "Really good service and very nice support staff when you need them when your stuck with something"
						}} />
						<Review item={{
							avatar: 'iz',
							name: 'Izaac',
							content: "Really good service and very nice support staff when you need them when your stuck with something"
						}} />
						<Review item={{
							avatar: 'iz',
							name: 'Izaac',
							content: "Really good service and very nice support staff when you need them when your stuck with something"
						}} />
						<Review item={{
							avatar: 'iz',
							name: 'Izaac',
							content: "Really good service and very nice support staff when you need them when your stuck with something"
						}} />
						<Review item={{
							avatar: 'iz',
							name: 'Izaac',
							content: "Really good service and very nice support staff when you need them when your stuck with something"
						}} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default ReviewsSection;