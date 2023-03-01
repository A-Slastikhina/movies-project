import React,{Component} from "react";
import axios from "axios";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
const API_KEY = process.env.REACT_APP_API_KEY
class Main extends Component {
   constructor (){
   super();
   this.state={
      movies:[],
      loading:true
   }   
   }
 SearchMovie =(str, type = '')=>{
   this.setState({loading:false})
   let options ={
      method:'get',
      url:`http://www.omdbapi.com/?s=${str}&apikey=${API_KEY}${type !== 'all'? `&type=${type}`: ''}`,

    }
    const self = this;
    axios.request(options)
      .then (function(response){
        self.setState({movies: response.data.Search});
       
      })
      .catch(function(err){
        alert(err)
      })
 }
   componentDidMount(){
    
      const options ={
         method:'get',
         url:'http://www.omdbapi.com/',
         params:{
            apikey: API_KEY,
            s:'matrix',
         }
       }
       const self = this;
       axios.request(options)
         .then (function(response){
           self.setState({movies: response.data.Search, loading:false});
          // console.log(self.state.movies)
         })
         .catch(function(err){
           alert(err)
         })
 
   }
   render(){
      const {movies, loading} = this.state
      return <main className="main-content">
         <Search SearchMovie={this.SearchMovie}/>
         {  
            loading ? (<Preloader/>):
            (<Movies movies={movies}/>
            )  
         }
        
      </main>
   }

}


export {Main}