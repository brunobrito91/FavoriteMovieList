import React, { Component } from 'react';

class FavoriteMovie extends Component {
	render(){
    	return(
        	<p>{this.props.user.name}'s favorite movie is {this.props.movie.name}.</p>
		);
    }
}

export default FavoriteMovie;