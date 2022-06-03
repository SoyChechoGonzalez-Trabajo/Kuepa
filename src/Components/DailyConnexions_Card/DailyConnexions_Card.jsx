import React from 'react';
import './DailyConnexions_Card.css';

const DailyConnexions_Card = (props) => {
	return (
		<div className='DailyConnexions_Card'>
			<span className='DailyConnexions_CardUserName'>{ props.name }</span>
			<div className='DailyConnexions_CardCallDiscount'>
				<span className='Call'>{ props.action }</span>
				<span className='Discount'>{ props.discount }</span>
			</div>
			<div className='DailyConnexions_CardIcons'>
				<i className="fa-solid fa-circle"></i>
				<span className='DailyConnexions_CardIconsContact'>
					<i className="fa-solid fa-phone"></i>
					<i className="fa-regular fa-message"></i>
				</span>
			</div>
		</div>
	)
}
export default DailyConnexions_Card;