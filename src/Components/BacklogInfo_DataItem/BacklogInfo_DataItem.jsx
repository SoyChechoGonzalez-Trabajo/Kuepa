import React from 'react';
import './BacklogInfo_DataItem.css';

const BacklogInfo_DataItem = (props) => {
	return (
		<article className='BacklogInfo_DataItem'>
			<span> { props.typeItem }</span>
			<span> { props.statistics }</span>
		</article>
	)
}

export default BacklogInfo_DataItem;