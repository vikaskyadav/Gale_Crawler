import React from 'react'
import { connect } from 'react-redux'
import { add, subtract, loadingData } from '../actions/'
import PresentationalComponent from '../components/Presentational'
import TextField from '@material-ui/core/TextField/';
import Button from '@material-ui/core/Button/';
import FetchContainer from './FetchContainer'
import NavBar from '../components/NavBar';
import {Row,Col} from 'react-grid-system'


class Container extends React.Component {

	state={
		url: '',
		depth: '',
	}

	handleChange = name => event => {
		this.setState({
		  [name]: event.target.value,
		});
	  };

	handleSubmit = () => {
		this.props.fetchAction(this.state);
		console.log(this.state,'nananan');
	}

	render() {
		const {data} = this.props;
		console.log(data? data:'NAA')
		return (
			<div>
				<NavBar/>
				<Row>

				<div style={{ display:'flex', flexDirection:'row', flexWrap:'nowrap'}}>
					<Col lg="8" >
				<TextField
					id="url"
					label="Seed URL"
					value={this.state.url}
					onChange={this.handleChange('url')}
					margin="normal"
					fullWidth
					/>
					</Col>
					<Col lg="3" >
				<TextField
					id="depth"
					label="Depth"
					value={this.state.depth}
					onChange={this.handleChange('depth')}
					margin="normal"
					fullWidth
					/>
					</Col>
					<Col lg="1" >
				<Button  variant="contained" color="secondary"  onClick={() => this.handleSubmit()} style={{ marginTop:'10px'}}>
					Go Spidy!
				</Button>
					</Col>
					{/* <button onClick={() => this.handleSubmit()}>fetch</button> */}
					<FetchContainer images={this.props.data}/>
				</div>
				</Row>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	isOn: state.counterReducer.isOn,
	data: state.dataReducer.data
})

const mapDispatchToProps = dispatch => ({
	addAction: () => {
		dispatch(add())
	},
	subtractAction: () => dispatch(subtract()),
	fetchAction: (state) => {
		loadingData(dispatch,state)}
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)
