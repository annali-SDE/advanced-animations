import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='w-full border-t-2 border-solid border-dark font-medium text-lg md:text-base px-12'>
			<Layout className='py-12 flex items-center justify-between lg:flex-row lg:py-6'>
				<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
				<div className='flex items-center lg:py-2'>
					Build with <span className='px-1'> ❤️ </span> by Anna Li
				</div>
				<Link
					href='mailto:annalideveloper@gmail.com'
					target='_blank'
					className='underline'
				>
					Say Hello 👋
				</Link>
			</Layout>
		</footer>
	);
};

export default Footer;
