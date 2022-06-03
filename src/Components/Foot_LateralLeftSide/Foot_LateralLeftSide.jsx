import React from 'react';
import './Foot_LateralLeftSide.css';
import profile from '../../assets/img/profile.png'

const Foot_LateralLeftSide = () => {
	return (
		<div className='Foot_LateralLeftSide'>
			<i className="fa-regular fa-message"></i>
			<picture className='Img_Foot_LateralLeftSide'>
				<img src={ profile } alt=''/>
			</picture>
		</div>
	)
}

export default Foot_LateralLeftSide;