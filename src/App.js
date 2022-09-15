
import { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

import Navbar from './Components/Navbar/Navbar';
import { ThemeContext } from './Components/ThemeContext/ThemeContext';
import Home from './Pages/Home/Homepage';

function App() {
  const [state, setState] = useState(false);
	const { newTheme, open, handleMenu } =
		useContext(ThemeContext);
  const scrollRef = useRef();
  return (
    <>
    
				<div className='components'>
           
					<div
						style={{
							background: `${newTheme.menuBackground}`,
							color: `${newTheme.title}`,
							left: `${open ? '-100vw' : '0'}`,
						}}
						className='links'
					>
						<Link onClick={handleMenu}to='#home'>
							Home
						</Link>
						<Link onClick={handleMenu}to='#Linkbout'>
							Linkbout
						</Link>
						<Link onClick={handleMenu}to='#projects'>
							Projects
						</Link>
						<Link onClick={handleMenu}to='#techstLinkcks'>
							Skills
						</Link>
						<Link onClick={handleMenu}to='#contLinkct'>
							ContLinkct
						</Link>
					</div>
					<Navbar />
					<Home scrollRef={scrollRef} />
				</div>
			
		</>
  );
}

export default App;
