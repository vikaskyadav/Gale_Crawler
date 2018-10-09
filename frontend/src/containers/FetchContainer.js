import React from 'react'
import { connect } from 'react-redux'
import { Container,Row,Col } from 'react-grid-system';
import { Card, CardContent } from '@material-ui/core';
class FetchContainer extends React.Component {

	render() {
		const {images} = this.props;
		return (
			<div>
				<Row>
				{this.props.images && this.props.images.img?
				this.props.images.img.map((src,index)=>
				(<Col lg="4" md="4" sm="12">
				<Card>
				<CardContent>
				<img src={src}/>
				</CardContent>

				</Card>
				</Col>
			)):null}
				</Row>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	loading: state.dataReducer.loading,
	data: state.dataReducer.data
})

export default connect(mapStateToProps)(FetchContainer)
