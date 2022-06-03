import React from 'react';
import './BacklogInfo_Data.css';
import BacklogInfo_DataItem from '../BacklogInfo_DataItem/BacklogInfo_DataItem';

const BacklogInfo_Data = () => {
	return (
		<article className='BacklogInfo_Data'>
			<BacklogInfo_DataItem typeItem='Leads Obtenidos' statistics={`50/100`}/>
			<BacklogInfo_DataItem typeItem='Matrículas Finalizadas' statistics={`10/20`}/>
			<BacklogInfo_DataItem typeItem='Cola de llamados' statistics={`50/100`}/>
		</article>
	)
}

export default BacklogInfo_Data;