import welcomeHover1 from '../../../public/welcomeHover1.png';
import welcomeHover2 from '../../../public/welcomeHover2.png';
import welcomeHover3 from '../../../public/welcomeHover3.png';
import welcomeHover4 from '../../../public/welcomeHover4.png';
import ImageEffects from '@/components/ImageEffects';

const Images = () => {
	return (
		<div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-40 lg:h-[800px] overflow-hidden'>
			<div className='flex flex-col items-center justify-between'>
				<h3 className='text-lg font-mono font-bold'>Image Effects</h3>
				<p className='text-lg font-mono py-4 text-[#ee9ae5]'>
					Hover to see the effects 👋
				</p>
				<div className='grid grid-cols-3 gap-8 mt-10'>
					<ImageEffects
						className={'image-style-1'}
						img={welcomeHover1}
						hasButton={false}
					/>
					<ImageEffects
						className={'image-style-2'}
						img={welcomeHover2}
						hasButton={false}
					/>
					<ImageEffects
						className={'image-style-3'}
						img={welcomeHover4}
						hasButton={false}
					/>
					<ImageEffects
						className={'image-style-4'}
						img={welcomeHover3}
						hasButton={true}
					/>
					<ImageEffects
						className={'image-style-5'}
						img={welcomeHover3}
						hasButton={true}
					/>
					<ImageEffects
						className={'image-style-6'}
						img={welcomeHover3}
						hasButton={true}
					/>
				</div>
			</div>
		</div>
	);
};

export default Images;
