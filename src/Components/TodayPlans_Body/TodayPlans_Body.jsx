import React from 'react';
import './TodayPlans_Body.css';

import TodayPlans_BodyLeft from '../TodayPlans_BodyLeft/TodayPlans_BodyLeft';
import TodayPlans_BodyRight from '../TodayPlans_BodyRight/TodayPlans_BodyRight';

const TodayPlans_Body = () => {
	return (
		<div className='TodayPlans_Body'>
			<TodayPlans_BodyLeft />
			<TodayPlans_BodyRight number={30} descriptionTitle='Leads de Primer Contacto'/>
		</div>
	)
}

export default TodayPlans_Body;