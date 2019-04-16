import React from 'react';

class SearchParams extends React.Component {
	state = {
		location: "Seattle, WA",
		animal: "",
		breed: "",
	};
	handleLocationChange = event => {
		this.setState({
			location: event.target.value
		})
	}
	render() {
		return(
			<div className="search-params">
				<label htmlFor="location">
					location
					<input
						onChange={this.handleLocationChange}
						id="location"
						value={this.state.location}
						placeholder="Location"
					/>
				</label>
			</div>
		)
	}
}

export default SearchParams