import {Movie} from "./Movie"
export function Movies (props){
    const {movies = []} = props
    return <div className="col s12 m7 card-container" >
        {
            movies.length  ? (movies.map(movie =>(
                <Movie key={movie.imdbID} {...movie}/>
            ))) : (<h2>Nothing found</h2>)
            
        }
    </div>
}