import React,{useState, useEffect} from "react";
import axios from "axios";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
const API_KEY = process.env.REACT_APP_API_KEY
const Main  =()=> {
   const [movies, setMovies] = useState([]);
   const [loading, setLoading]= useState(true)

const SearchMovie = (str, type = '')=>{
   let options ={
      method:'get',
      url:`https://www.omdbapi.com/?s=${str}&apikey=${API_KEY}${type !== 'all'? `&type=${type}`: ''}`,

    }
   //  const self = this;
    axios.request(options)
      .then (function(response){
         setMovies(response.data.Search);
         setLoading(false)
        //setState({movies: response.data.Search, loading:false});
       
      })
      .catch(function(err){
         setLoading(false)
        alert(err)
      })
 }

   useEffect(()=>{
      console.log('did mount')
      const options ={
         method:'get',
         url:'https://www.omdbapi.com/',
         params:{
            apikey: API_KEY,
            s:'matrix',
         }
       }
       
       axios.request(options)
         .then (function(response){
            setMovies(response.data.Search);
            setLoading(false)
         })
         .catch(function(err){
           setLoading(false)
           alert(err);
          
         })

   },[]

   )

      return <main className="main-content">
         <Search SearchMovie={SearchMovie}/>
         {  
            loading ? (<Preloader/>):
            (<Movies movies={movies}/>
            )  
         }
        
      </main>
 

}


export {Main}