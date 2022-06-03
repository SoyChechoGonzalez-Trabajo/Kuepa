import React from 'react';
import './LateralLeftSide.css';
import Head_LateralLeftSide from '../Head_LateralLeftSide/Head_LateralLeftSide';
import Foot_LateralLeftSide from '../Foot_LateralLeftSide/Foot_LateralLeftSide';


const LateralLeftSide = () => {
	return(
		<div className='LateralLeftSide'>
			<Head_LateralLeftSide />
			<Foot_LateralLeftSide />
		</div>
	)
}

export default LateralLeftSide;