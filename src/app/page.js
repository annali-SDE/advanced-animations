import Image from 'next/image';
import butterflies from '../../public/butterflies.png';
import Layout from '@/components/Layout';
import self from '../../public/self.jpg';
import styles from '@/styles/cards.module.css';

export default function Home() {
	return (
		<div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-40 lg:h-[800px] overflow-hidden'>
			<div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 mb-20'>
				<div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
					{/* banner image */}
					<div>
						<Image
							src={butterflies}
							alt='image'
							width={250}
							height={250}
							priority
						></Image>
					</div>
					{/* banner content */}
					<div className='md:w-3/5'>
						<h2 className='md:text-4xl text-4xl font-bold text-white mb-6'>
							Advanced CSS & Javascript Effects
						</h2>
						<ul className='list-disc px-20 py-12'>
							<li className='text-[#ebebeb] text-2xl mb-8'>
								Example of different buttons, images, cards, loaders, menus
								creative effects
							</li>
							<li className='text-[#ebebeb] text-2xl mb-8'>
								Example of using CSS & Javascript animations, transitions and
								transforms
							</li>
							<li className='text-[#ebebeb] text-2xl mb-8'>
								Example of using CSS clip-path property in animating html
								elements
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
