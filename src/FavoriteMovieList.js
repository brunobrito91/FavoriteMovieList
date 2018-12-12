import React, { Component } from 'react';
import FavoriteMovie from './FavoriteMovie'; 

class FavoriteMovieList extends Component {
	render(){
    	return(
          this.props.profiles.map((profile) => 
			<FavoriteMovie key={profile.id} user={this.props.users[profile.userID]} movie={this.props.movies[profile.favoriteMovieID]}/>
          )
		);
    }
}

export default FavoriteMovieList;