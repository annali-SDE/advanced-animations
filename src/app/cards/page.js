import React from 'react';
import welcomeHover1 from '../../../public/welcomeHover1.png';
import butterflies from '../../../public/butterflies.png';
import self from '../../../public/self.jpg';
import post from '../../../public/post.jpg';
import headphone1 from '../../../public/headphone1.png';
import shoes from '../../../public/shoes.png';
import styles from '@/styles/cards.module.css';
import Image from 'next/image';

const Cards = () => {
	return (
		<div className='flex flex-col items-center justify-center p-20'>
			<h3 className='text-lg font-mono font-bold'>Card Effects</h3>
			<p className='text-lg font-mono py-4 text-[#ee9ae5]'>
				Hover to see the effects 👋
			</p>
			<div className='flex flex-rows items-center justify-center mt-20 gap-10'>
				<div className={styles['card-style-1']}>
					<div className={styles['content']}>
						<h2>card</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua,
							incididunt ut labore et, incididunt ut labore et.
						</p>
						<a href='#'>read more</a>
					</div>
				</div>
				<div className={styles['card-style-2']}>
					<div className={styles['imgbox']}>
						<Image
							src={welcomeHover1}
							alt='image'
							width={250}
							height={250}
						></Image>
					</div>
					<div className={styles['content']}>
						<h2>card hover</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</div>
				<div className={styles['card-style-3']}>
					<div className={styles['content']}>
						<h2>captain marvel</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<a href='#'>read more</a>
					</div>
					<Image src={butterflies} alt='image' width={250} height={250}></Image>
				</div>
			</div>
			<div className='flex flex-rows items-center justify-center mt-10 gap-10'>
				<div className={styles['card-style-4']}>
					<div className={styles['face1']}>
						<div className='imgbox'>
							<Image
								src={butterflies}
								alt='image'
								width={250}
								height={250}
							></Image>
							<h3>design</h3>
						</div>
					</div>
					<div className={styles['face2']}>
						<div className={styles['content']}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
								cum cumque minus iste veritatis provident at.
							</p>
							<a href='#'>read more</a>
						</div>
					</div>
				</div>
				<div className={styles['card-style-5']}>
					<div className={styles['imgbox']}>
						<Image src={self} alt='image' width={250} height={250}></Image>
					</div>
					<div className={styles['details']}>
						<h2>
							Anna Li
							<span>software engineer</span>
						</h2>
					</div>
				</div>
				<div className={styles['card-style-6']}>
					<div className={styles['imgbox']}>
						<Image src={post} alt='image' width={250} height={250}></Image>
					</div>
					<div className={styles['content']}>
						<h3>post title</h3>
						<p>
							lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<a href='#'>read more</a>
					</div>
				</div>
			</div>
			<div className='flex flex-rows items-center justify-center mt-10 gap-10'>
				<div className={styles['card-style-7']}>
					<div className={styles['imgBx']}>
						<Image
							src={headphone1}
							alt='image'
							width={250}
							height={250}
						></Image>
					</div>
					<div className={styles['contentBx']}>
						<h3>Wireless Headphones</h3>
						<h2 className={styles['price']}>
							$40.<small>99</small>
						</h2>
						<a href='#' className={styles['buy']}>
							Buy Now
						</a>
					</div>
				</div>
				<div className={styles['card-style-8']}>
					<div className={styles['imgBx']}>
						<Image src={shoes} alt='image' width={250} height={250}></Image>
					</div>
					<div className={styles['contentBx']}>
						<h2>Nike Shoes</h2>
						<div className={styles['size']}>
							<h3>size:</h3>
							<span>7</span>
							<span>8</span>
							<span>9</span>
							<span>10</span>
						</div>
						<div className={styles['color']}>
							<h3>color:</h3>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<a href='#'>buy now</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
