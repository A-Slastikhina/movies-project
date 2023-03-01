export function Movie (props){
    const {Title:title,
           imdbID: id, 
           Poster:poster,
           Type: type,
           Year: year
            } = props

    return (<div className="card blue lighten-5">

                 
                 <div className="card-image">
                    {
                        poster === 'N/A' ?  <img src={`https://placehold.co/300x450?text=${title}`}/>
                            : <img src={poster}/>
                    }          
                    <span className="card-title">{title}</span>
                </div>
                 <div className="card-action">
                    <p  className="blue-grey-text text-darken-4 card-info">{type} <span className="right">{year}</span></p>
                </div>
            </div>)
 
}
