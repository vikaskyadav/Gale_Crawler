export const add = () => ({
	type: 'ADD'
})

export const subtract = () => ({
	type: 'SUBTRACT'
})

// export const loadingData = (dispatch,state) => ({
// 	type: 'LOADING_DATA',
// 	payload: state,
// })


export const  loadingData = async (dispatch,state) => {
	// dispatch({ type: 'LOADING_DATA',data: a})
	console.log('state',state)

	const res = await fetch('http://127.0.0.1:8000/images/',
	{   mode: 'cors',
		method:'POST',
		body: JSON.stringify(state)
	})
	const response = await res.json()
		setTimeout(() => {
			dispatch({ type: 'DATA_SUCCESS', payload: response })
		}, 5000)
	}
	// console.log(response.json());

	// const chunk = jsonData.slice(0, 6)
	// const pictures = [...chunk]

