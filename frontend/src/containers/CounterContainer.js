import React from 'react'
import { connect } from 'react-redux'

class CounterContainer extends React.Component {
	render() {
		return (
			<div>
				<h1>Counter component (connected)</h1>
				<h2 style={{ padding: 10, border: '1px solid #f2f2f2', width: 40 }}>
					{this.props.isOn}
				</h2>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	isOn: state.counterReducer.isOn
})

export default connect(mapStateToProps)(CounterContainer)
