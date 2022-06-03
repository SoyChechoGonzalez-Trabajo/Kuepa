import React from 'react';

const CallAndMessageNumbers = (props) => {
	return (
		<div className='CallAndMessageNumbers'>
			<span><i className={`${ props.icon }`}></i></span>
			<span> { props.number }</span>
		</div>
	)
}

export default CallAndMessageNumbers;