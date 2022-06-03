import React from 'react';
import './GroupGoal_Progress.css';
import Progress from 'react-progressbar';

	const GroupGoal_Progress = (props) => {
			return (
				<div className='GroupGoal_Progress'>
					<div>
						<span>{ props.typeItem }</span>
						<span>{ props.statistics }</span>
					</div>
					<Progress completed={70} color='#FD531E' className='progress'/>
				</div>
			)
	}

export default GroupGoal_Progress;