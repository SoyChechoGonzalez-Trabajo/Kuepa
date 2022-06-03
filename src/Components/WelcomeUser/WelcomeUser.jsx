import React from 'react';
import './WelcomeUser.css';
import BacklogInfo from '../BacklogInfo/BacklogInfo';
import GroupGoal from '../GroupGoal/GroupGoal';

const WelcomeUser = () => {
	return(
		<section className='WelcomeUser'>
			<h1>Hola, Sergio</h1>
			<div className='WelcomeUser_Sections'>
				<BacklogInfo />
				<GroupGoal />
			</div>
		</section>
	)
}

export default WelcomeUser;