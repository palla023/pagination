import React from 'react'
import './App.css'

const Pagination = ({ data, pageHandler }) => {
	{/*we are setting manually here
let pageNumbers = [1,2,3,4,5,6,7,8,9,10]; */}
	let pageNumbers = []
	{/*for (let i= 0; i < Math.ceil(data.length /10) ; i++) {
	pageNumbers.push(i);  */}
	//Starting with 1 ; so we are adding +1 in condition.Based on the condition (data.length /5 or data.length /10)Index Numbers Increases.
	for (let i = 1; i < Math.ceil(data.length / 10) + 1; i++) {
		pageNumbers.push(i);

	}
	return (
		<div className='container text-center bg-secondary pt-2'>
			{pageNumbers.map(page => <div className='pagination' style={{cursor:'pointer'}}><a className='pagination a ' onClick={()=> pageHandler(page)}>{page}</a></div>)}
		</div>
	)
}

export default Pagination
