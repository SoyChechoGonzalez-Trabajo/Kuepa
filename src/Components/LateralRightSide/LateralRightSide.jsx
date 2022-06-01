import React from 'react';
import './LateralRightSide.css';

import ProspectCardContact from '../ProspectCardContact/ProspectCardContact';

const LateralRightSide = () => {
	let prospectsInfo = [
		{
			name: 'Jorge García',
			typeContact: 'Whatsapp',
			ago: 6,
			icon: 'fa-brands fa-whatsapp'
		},
		{
			name: 'Jorge García',
			typeContact: 'Whatsapp',
			ago: 6,
			icon: 'fa-brands fa-whatsapp'
		},
		{
			name: 'Juan García',
			typeContact: 'Facebook',
			ago: 8,
			icon: 'fa-brands fa-facebook-f'
		},
		{
			name: 'Juan García',
			typeContact: 'Facebook',
			ago: 8,
			icon: 'fa-brands fa-facebook-f'
		},
		{
			name: 'Juan García',
			typeContact: 'Facebook',
			ago: 8,
			icon: 'fa-brands fa-facebook-f'
		},
		{
			name: 'David García',
			typeContact: 'Mail',
			ago: 10,
			icon: 'fa-solid fa-envelope'
		},
		{
			name: 'Ivan Cantú',
			typeContact: 'Phone',
			ago: 10,
			icon: 'fa-solid fa-phone'
		},
		{
			name: 'Daniel Amado',
			typeContact: 'Whatsapp',
			ago: 12,
			icon: 'fa-brands fa-whatsapp'
		},
		{
			name: 'Daniel Amado',
			typeContact: 'Whatsapp',
			ago: 12,
			icon: 'fa-brands fa-whatsapp'
		},
		{
			name: 'Daniel Amado',
			typeContact: 'Whatsapp',
			ago: 12,
			icon: 'fa-brands fa-whatsapp'
		},
		{
			name: 'Miguel Molano',
			typeContact: 'Facebook',
			ago: 14,
			icon: 'fa-brands fa-facebook-f'
		},
		{
			name: 'Stefan Cubides',
			typeContact: 'Mail',
			ago: 16,
			icon: 'fa-solid fa-envelope'
		}
	];
	return (
		<div className='LateralRightSide'>
			{
				prospectsInfo.map((prospectInfo, i) => {
					return <ProspectCardContact
						name={ prospectInfo.name }
						typeContact={ prospectInfo.typeContact }
						ago={ prospectInfo.ago }
						icon={ prospectInfo.icon }
						key={i}
					/>
				})
			}
		</div>
	);
}

export default LateralRightSide;