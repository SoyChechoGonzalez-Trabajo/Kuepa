import React from 'react';
import './GroupGoal.css';
import GroupGoal_Progress from '../GroupGoal_Progress/GroupGoal_Progress';

const GroupGoal = () => {
	return (
		<div className='GroupGoal'>
			<h3>Meta Grupal</h3>
			<GroupGoal_Progress typeItem='Leads Obtenidos' statistics={`200/400`}/>
			<GroupGoal_Progress typeItem='Matriculas Realizadas' statistics={`50/100`}/>
		</div>
	)
}

export default GroupGoal;