import React from 'react';
import Ket from '../../../Ket.svg';
import './Head_LateralLeftSide.css';
import Sections_LateralLeftSide from '../Sections_LateralLeftSide/Sections_LateralLeftSide';

const Head_LateralLeftSide = () => {
	return (
		<div className='Head_LateralLeftSide'>
			<img className='Img_LateralLeftSide' src={ Ket } alt='Imagen Ket' title='Imagen Ket'/>
			<Sections_LateralLeftSide />
		</div>
	)
}

export default Head_LateralLeftSide;