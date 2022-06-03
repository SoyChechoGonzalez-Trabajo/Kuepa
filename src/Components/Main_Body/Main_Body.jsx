import React from 'react';
import './Main_Body.css';
import WelcomeUser from '../WelcomeUser/WelcomeUser';
import TodayPlans from '../TodayPlans/TodayPlans';

const Main_Body = () => {
	return (
		<section className='Main_Body'>
			<WelcomeUser />
			<TodayPlans />
		</section>
	)
}

export default Main_Body;