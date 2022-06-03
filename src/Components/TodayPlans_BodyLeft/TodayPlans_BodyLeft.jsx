import React from 'react';
import './TodayPlans_BodyLeft.css';
import DailyConnexions from '../DailyConnexions/DailyConnexions';

const TodayPlans_BodyLeft = () => {
	return (
		<div className='TodayPlans_BodyLeft'>
			<h2>Conexiones de agenda para hoy</h2>
			<DailyConnexions />
		</div>
	)
}

export default TodayPlans_BodyLeft;