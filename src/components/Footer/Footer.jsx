import React from 'react'
import DarkToggleButton from '../DarkToggleButton/DarkToggleButton'

function Footer() {
	return (
		<footer className='bottom-0 absolute w-full bg-zinc-800 py-2'>
			<nav className='text-white flex justify-between items-center container mx-auto'>
				<ul>
					<li className='text-xs'>All rights not reserved</li>
				</ul>
				<DarkToggleButton />
			</nav>
		</footer>	
	)
}

export default Footer