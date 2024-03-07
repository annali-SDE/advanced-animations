import React from 'react';
import styles from '@/styles/images.module.css';
import Image from 'next/image';

const ImageEffects = ({ className, img, hasButton }) => {
	return (
		<div className={`${styles[className]}`}>
			<Image src={img} alt='image' width={250} height={250}></Image>
			<div className={styles['caption']}>
				<h1>amazing caption</h1>
				<p>you can write anything here!</p>
				{hasButton && <a href='#'>read more</a>}
			</div>
		</div>
	);
};
export default ImageEffects;
