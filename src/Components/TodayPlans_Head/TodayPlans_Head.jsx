import React from 'react';
import './TodayPlans_Head.css';

const TodayPlans_Head = () => {
	return (
		<div className='TodayPlans_Head'>
			<h2>Tu plan de hoy</h2>
			<div className='TodayPlans_CallManagement'>
				<span>Ir a la gestión de llamadas</span>
				<i className="fa-solid fa-angle-right"></i>
			</div>
		</div>
	)
}

export default TodayPlans_Head;