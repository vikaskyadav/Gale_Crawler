const initialState = {
	isOn: 0
}
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD': {
			return { ...state, isOn: state.isOn + 1 }
			break
		}

		case 'SUBTRACT': {
			return {
				...state,
				isOn: state.isOn - 1
			}
			break
		}
	}

	return state
}
