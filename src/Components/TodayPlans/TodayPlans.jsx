import React from 'react';
import './TodayPlans.css';
import TodayPlans_Head from '../TodayPlans_Head/TodayPlans_Head';
import TodayPlans_Body from '../TodayPlans_Body/TodayPlans_Body';

const TodayPlans = () => {
	return(
		<div className='TodayPlans'>
			<TodayPlans_Head />
			<TodayPlans_Body />
		</div>
	)
}

export default TodayPlans;