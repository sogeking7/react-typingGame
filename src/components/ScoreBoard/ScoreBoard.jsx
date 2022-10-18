import React from 'react'
import './ScoreBoard.scss'
import head from '../../img/head.svg'

function ScoreBoard() {
	return (
		<div className='flex'>
			<div className='mr-3 w-11 h-11 bg-violet-600 flex items-center justify-center rounded-md'>
				<img id="head" src={head} alt="head" />
			</div>
			<div className='text-white'>
				<h1 className='text-base'>kaiyrkhan kairolla (kair011a_)</h1>
				<div className='flex gap-2 text-sm'>
					<h2 className='font-bold px-4 bg-violet-600 rounded-sm'>
						79 WPM
					</h2>
					<h2 className='px-4 bg-violet-600	rounded-sm'>
						<span className='font-bold'>365&nbsp;</span>Races
					</h2>
				</div>
			</div>
		</div>
	)
}

export default ScoreBoard