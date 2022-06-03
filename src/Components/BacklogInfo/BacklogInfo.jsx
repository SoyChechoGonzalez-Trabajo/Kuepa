import React from 'react';
import './BacklogInfo.css';
import './CircularProgressbar.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import BacklogInfo_Data from '../BacklogInfo_Data/BacklogInfo_Data';

const BacklogInfo = () => {
	const percentage = 50;
	return (
			<article className='BacklogInfo'>
				<CircularProgressbar value={ percentage } text={`${ percentage }%`} />
				<BacklogInfo_Data />
			</article>
	)
}

export default BacklogInfo;