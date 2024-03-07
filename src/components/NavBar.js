import styles from '@/styles/home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import img from '../../public/img.jpg';

const NavBar = () => {
	return (
		<header>
			<div className={styles['menu']}>
				<div className={styles['user']}>
					<div className={styles['imgBx']}>
						<Image src={img} alt='image' width={100} height={100}></Image>
					</div>
					<div className={styles['details']}>
						<h3>Anna Li</h3>
						<p>Software Developer</p>
					</div>
				</div>
			</div>
			<nav className={styles['navigation']}>
				<Link href='/'>Home</Link>
				<Link href='/buttons'>Buttons</Link>
				<Link href='/menus'>Menus</Link>
				<Link href='/images'>Images</Link>
				<Link href='/cards'>Cards</Link>
			</nav>
		</header>
	);
};

export default NavBar;
