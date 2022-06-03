import { useEffect } from 'react';
import './LateralRightSide.css';
import ProspectCardContact from '../ProspectCardContact/ProspectCardContact';

import { useSelector, useDispatch } from "react-redux";
import { getProspects } from "../../redux/actions";



const LateralRightSide = () => {
	const dispatch = useDispatch();
	const prospects = useSelector((state) => state.prospects);
	
	useEffect(() => {
		dispatch((getProspects()));
	}, [dispatch]);

	return (
		<div className='LateralRightSide'>
			<div className='LateralRightSide_Content'>
					{
						prospects.map((prospectInfo, i) => {
							return <ProspectCardContact
								name={ prospectInfo.name }
								typeContact={ `Whatsapp` }
								ago={ 6 }
								icon={ `fa-brands fa-whatsapp` }
								key={i}
							/>
						})
					}
			</div>
		</div>
	);
}

export default LateralRightSide;