import React from 'react';
import styles from '@/styles/buttons.module.css';

const ButtonEffects = ({ effect, text }) => {
	return (
		<div>
			<button className={`${styles[effect]} rounded-lg`}>
				<span>{text}</span>
			</button>
		</div>
	);
};
export default ButtonEffects;
