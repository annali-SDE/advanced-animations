import React from 'react';
import styles from '@/styles/menus.module.css';

const MenuEffects = ({ className, navs, spanCount }) => {
	const spans = new Array(spanCount).fill('');
	return (
		<div className='flex flex-row items-center justify-center mt-10'>
			<ul className={`${styles[className]}`}>
				{navs.split(' ').map((word, index) => (
					<li key={index}>
						<a href='#'>
							{word}
							{spans.map((span, index) => (
								<span key={index}>{span}</span>
							))}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};
export default MenuEffects;
