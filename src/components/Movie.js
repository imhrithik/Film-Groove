import movie from '../componentscss/Movie.css';

const Movie = (props) => {
  return (
    <div className="movie">
        <img src= {props.poster} alt="Movie" />
        <p>Title: {props.title}</p>
        <p>Year : ({props.year})</p>
    </div>
  )
}

export default Movie
