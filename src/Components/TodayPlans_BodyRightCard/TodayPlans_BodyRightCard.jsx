import React from 'react';
import './TodayPlans_BodyRightCard.css';
import CallAndMessageNumbers from '../CallAndMessageNumbers/CallAndMessageNumbers';

const TodayPlans_BodyRightCard = (props) => {
	return (
		<div className='TodayPlans_BodyRightCard'>
			<div className='TodayPlans_BodyRightCardBoxNumber'>
				<span>
					{ props.number }
				</span>
			</div>
			<div className='TodayPlans_BodyRightCardDescription'>
				<span>{ props.descriptionTitle }</span>
				<CallAndMessageNumbers number={ 15 } icon='fa-solid fa-phone' />
				<CallAndMessageNumbers number={ 17 } icon='fa-regular fa-message' />
			</div>
		</div>
	)
}

export default TodayPlans_BodyRightCard;