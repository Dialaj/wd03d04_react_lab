
import React from 'react'
import Fave from './Fave/Fave'
function FilmRow(props) {

      var year = new Date(props.film.release_date);
      return (
       <div className = 'film-row'onClick = {()=>props.handleDetailsClick(props.film.title)} >
        <img src = {`https://image.tmdb.org/t/p/w780/${props.film.poster_path}`} />
        <div className = ' film-summary' >
        <Fave  onFaveToggle={props.onFaveToggle} isFave ={props.isFave}/>
        <h3>{props.film.title}</h3>
        <p>{year.getFullYear()}</p> 
        </div>
   </div> 
      )
}
   
export default FilmRow
