
import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

import Navbar from './Components/Navbar/Navbar';

import Home from './Pages/Home/Homepage';
import { ThemeContext } from './ThemeContext/ThemeContext';

function App() {
	const [state, setState] = useState(false);
	const { newTheme, open, handleMenu } =
		useContext(ThemeContext);
	const scrollRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			setState(true);
		}, 2000);
	}, []);


	return (
		<>
			{!state ? (
				<div
					style={{
						background: `${newTheme.background}`,
					}}
					className='logoStart'
				>
					<img
						src='https://us.123rf.com/450wm/dragomirescu/dragomirescu1909/dragomirescu190900059/129714051-alphabet-letter-logo-icon-design-z-in-pink-blue-colors-suitable-for-a-technology-company-or-business.jpg?ver=6'
						alt='logo'
					/>
				</div>
			) : (
				<div className='components'>
           
					<div
						style={{
							background: `${newTheme.menuBackground}`,
							color: `${newTheme.title}`,
							left: `${open ? '-100vw' : '0'}`,
						}}
						className='links'
					>
						<a onClick={handleMenu} href='#home'>
							Home
						</a>
						<a onClick={handleMenu} href='#about'>
							About
						</a>
						<a onClick={handleMenu} href='#projects'>
							Projects
						</a>
						<a onClick={handleMenu} href='#techstacks'>
							Skills
						</a>
						<a onClick={handleMenu} href='#contact'>
							Contact
						</a>
					</div>
					<Navbar />
					<Home scrollRef={scrollRef} />
				</div>
			)}
		</>
  );
}

export default App;
