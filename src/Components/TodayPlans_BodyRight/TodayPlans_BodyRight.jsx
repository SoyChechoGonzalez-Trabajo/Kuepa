import React from 'react';
import './TodayPlans_BodyRight.css';
import TodayPlans_BodyRightCard from '../TodayPlans_BodyRightCard/TodayPlans_BodyRightCard';

const TodayPlans_BodyRight = () => {
	return (
		<div className='TodayPlans_BodyRight'>
			<TodayPlans_BodyRightCard number={10} descriptionTitle='Leads de Primer Contacto' />
			<TodayPlans_BodyRightCard number={20} descriptionTitle='Leads de Primer Contacto' />
			<TodayPlans_BodyRightCard number={30} descriptionTitle='Leads de Primer Contacto' />
		</div>
	)
}

export default TodayPlans_BodyRight;