import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext/ThemeContext';

import styles from './SideIcons.module.css';

const SideIcons = () => {
	const { newTheme } =useContext(ThemeContext);
	// console.log(newTheme)
	return (
		<div className={styles.container}>
			<div
				className={styles.icons}
				style={{ right: 0, color: `${newTheme.sideIcons}` }}
			>
				<div className={styles.rightEmail}>
					<li>
						<a
							href='https://www.linkedin.com/in/md-zubair-229321230/'
							aria-label='Linkedin'
							target='_blank'
							rel='noreferrer'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								role='img'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								className='feather feather-linkedin'
							>
								<title>LinkedIn</title>
								<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
								<rect x='2' y='9' width='4' height='12' />
								<circle cx='4' cy='4' r='2' />
							</svg>
						</a>
					</li>
					<li>
						<a
						href='https://github.com/MDZUBAIR599'                        aria-label='GitHub'
							rel='noreferrer'
							target='_blank'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								role='img'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								className='feather feather-github'
							>
								<title>GitHub</title>
								<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
							</svg>
						</a>
					</li>
					<li>
						<a
						href='https://codesandbox.io/dashboard/templates?workspace=7534162b-03e9-4d0f-98fc-85773758c145'							
							aria-label='Codesandbox'
							target='_blank'
							rel='noreferrer'
						>
							<img width="35px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_ryNhg44m5Ns26qExQWocjn_uQC2R7sfDB8O-HQ-Sj7uHb9isOwWko8G6fv8mgNoctg&usqp=CAU" alt="codesandbox" />
								<title>Codesandbox</title>
								<path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
							
						</a>
					</li>
					<li>
						<a
						href='https://twitter.com/MdZubair5999'							
							aria-label='Twitter'
							target='_blank'
							rel='noreferrer'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								role='img'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								className='feather feather-twitter'
							>
								<title>Twitter</title>
								<path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
							</svg>
						</a>
					</li>
                    <li>
						<a
						href='mailto: mdzubair5999a@gmail.com'
						aria-label='email'
						target='_blank'
						rel='noreferrer'
						>
							{newTheme.title!=="white"?<img width="20px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4igrsBZmQcoSZ0cB-5CS6Qj0qcT4kTomZQ&usqp=CAU" alt="email"/>:<img src="https://freesvg.org/img/Mail-Icon-White-on-Black.png" alt="email" width="35px"/>}
						</a>
					</li>
				</div>
			</div>
		</div>
	);
};

export default SideIcons;
