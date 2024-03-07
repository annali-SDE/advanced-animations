import React from 'react';
import ButtonEffects from '@/components/ButtonEffects';

const Buttons = () => {
	return (
		<div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-40 lg:h-[800px] overflow-hidden'>
			<div className='flex flex-col items-center justify-between'>
				<h3 className='text-lg font-mono font-bold'>Button Effects</h3>
				<p className='text-lg font-mono py-4 text-[#ee9ae5]'>
					Hover to see the effects 👋
				</p>
				<div className='grid grid-cols-4 gap-8 mt-10'>
					<div className='flex w-[15rem] border-2 p-10 items-center justify-center'>
						<ButtonEffects effect='rotate-button' text='Rotate Button' />
					</div>
					<div className='flex w-[15rem] border-2 p-10 items-center justify-center'>
						<ButtonEffects effect='rotate-x-y' text='Rotate X&Y' />
					</div>
					<div className='flex w-[15rem] border-2 p-10 items-center justify-center'>
						<ButtonEffects effect='translate-button' text='Translate Button' />
					</div>
					<div className='flex w-[15rem] border-2 p-10 items-center justify-center'>
						<ButtonEffects effect='fill-button' text='Fill Button' />
					</div>
					<div className='flex w-[15rem] border-2 p-10 items-center justify-center'>
						<ButtonEffects effect='shift-bg' text='Shift Button' />
					</div>
					<div className='flex w-[15rem] border-2 p-10 items-center justify-center'>
						<ButtonEffects effect='splited-button' text='Splited Button' />
					</div>
					<div className='flex w-[15rem] border-2 p-10 items-center justify-center'>
						<ButtonEffects effect='swipe-button' text='Swipe Button' />
					</div>
					<div className='flex w-[15rem] border-2 p-10 items-center justify-center'>
						<ButtonEffects effect='swap-button' text='Swap Button' />
					</div>
					<div className='flex w-[15rem] border-2 p-10 items-center justify-center'>
						<ButtonEffects effect='grow-border' text='Grow Border' />
					</div>
					<div className='flex w-[15rem] border-2 p-10 items-center justify-center'>
						<ButtonEffects effect='skewed-button' text='Skewed Border' />
					</div>
					<div className='flex w-[15rem] border-2 p-10 items-center justify-center'>
						<ButtonEffects effect='pulsing-button' text='Pulsing Border' />
					</div>
					<div className='flex w-[15rem] border-2 p-10 items-center justify-center'>
						<ButtonEffects effect='more-swipe' text='More Swipe' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Buttons;
