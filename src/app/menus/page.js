import React from 'react';
import MenuEffects from '@/components/MenuEffects';

const Menus = () => {
	return (
		<div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-40 lg:h-[800px] overflow-hidden'>
			<div className='flex flex-col items-center justify-start'>
				<h3 className='text-lg font-mono font-bold'>Menu Effects</h3>
				<p className='text-lg font-mono py-4 text-[#ee9ae5]'>
					Hover to see the effects 👋
				</p>
				<MenuEffects
					className='menu-style-1'
					navs='Home About Services Portfolio Contact'
				/>
				<MenuEffects
					className='menu-style-2'
					navs='Home About Services Portfolio Contact'
				/>
				<MenuEffects
					className='menu-style-3'
					navs='Home About Services Portfolio Contact'
				/>
				<MenuEffects
					className='menu-style-4'
					navs='Home About Services Portfolio Contact'
				/>
				<MenuEffects
					className='menu-style-5'
					navs='Home About Services Portfolio Contact'
				/>
				<MenuEffects
					className='menu-style-6'
					navs='Home About Services Portfolio Contact'
					spanCount={2}
				/>
				<MenuEffects
					className='menu-style-7'
					navs='Home About Services Portfolio Contact'
					spanCount={4}
				/>
			</div>
		</div>
	);
};

export default Menus;
