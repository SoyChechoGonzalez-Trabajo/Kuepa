import React from 'react';
import PropTypes from 'prop-types';
import './ProspectCardContact.css';

const ProspectCardContact = (props) => {
	return (
		<div className='ProspectCardContact'>
			<i className={`${ props.icon }`}></i>
			<div className='Head_ProspectCardContact'>
				<span>{ props.typeContact }</span>
			</div>
			<div className='Body_ProspectCardContact'>
				<span className='name'>{ props.name }</span>
				<span className='ago'>{ props.ago }min ago</span>
			</div>
		</div>
	)
}

ProspectCardContact.propTypes = {
	name: PropTypes.string.isRequired,
	typeContact: PropTypes.oneOf(['Whatsapp', 'Facebook', 'Mail', 'Phone']).isRequired,
	ago: PropTypes.number.isRequired,
	icon: PropTypes.oneOf(['fa-brands fa-whatsapp', 'fa-brands fa-facebook-f', 'fa-solid fa-envelope', 'fa-solid fa-phone']).isRequired
}


export default ProspectCardContact;