import { useEffect } from 'react';
import './DailyConnexions.css';
import DailyConnexions_Card from '../DailyConnexions_Card/DailyConnexions_Card';

import { useSelector, useDispatch } from 'react-redux';
import { getProspects } from '../../redux/actions';

const DailyConnexions = () => {
	let usersConnexions = [
		{
			name: 'Andrés Felipe Melo Vargas',
			action: 'Llamar',
			discount: 'Descuento Temporada',
			active: true,
		},
		{
			name: 'Gustavo Cardenas Rodriguez',
			action: 'Llamar',
			discount: 'Descuento Temporada',
			active: true,
		},
		{
			name: 'Daniela Llano Sánchez',
			action: 'Llamar',
			discount: 'Descuento Temporada',
			active: false,
		},
		{
			name: 'Giovanni Amado Guzman',
			action: 'Llamar',
			discount: 'Descuento Temporada',
			active: true,
		},
		{
			name: 'Stefan Cubides Zabaleta',
			action: 'Llamar',
			discount: 'Descuento Temporada',
			active: true,
		}
	]
	
	const dispatch = useDispatch();
	const prospects = useSelector((state) => state.prospects);
	
	useEffect(() => {
		dispatch((getProspects()));
	}, [dispatch]);
	
	return(
		<div className='DailyConnexions'>
			{
				prospects.map((prospectInfo, i) => {
					return <DailyConnexions_Card
						name={ prospectInfo.name }
						action={ `Llamar` }
						discount={ `Descuento temporada` }
						key={i}
						/>
				})
			}
		</div>
	)
}

export default DailyConnexions;