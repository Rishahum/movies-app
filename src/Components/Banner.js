
import React, { Component } from 'react'
import { movies } from './getmovies'
export default class Banner extends Component {
  render() {
    let movie=movies.results[2]
    return (
      <>{movie===" " ?(<div>loading</div>):(<div></div>)}<div className='card-banner'>
      <img src= {`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className='card-img-top banner-img'  />
      <div className='card-body'>
        <div className='coralbutton'>
          <h4>{movie.original_title}</h4>
        </div>
        
        <p className='card-text'>{movie.overview}</p>
      </div>
    </div></>
        
    )
  }
}
