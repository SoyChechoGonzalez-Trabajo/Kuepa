import React from 'react';
import './Main_Head.css';

const Main_Head = () => {
	return (
			<header className='Head_Main'>
				<form action=''>
					<input type='search' placeholder='Search'/>
				</form>
				<div className='date_header'>
					<span>Wed, 20 May</span>
				</div>
			</header>
	)
}

export default Main_Head;