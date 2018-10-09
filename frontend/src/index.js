import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import ContainerComponent from './containers/Container'
import CounterContainer from './containers/CounterContainer'
import FetchContainer from './containers/FetchContainer'

import store from './store'

const component = (
	<div>
		<div>
			<ContainerComponent />
			<hr />
		</div>
	</div>
)

ReactDOM.render(
	<Provider store={store}>{component}</Provider>,
	document.getElementById('container')
)
