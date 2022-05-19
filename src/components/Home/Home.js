
import { useEffect, useState } from 'react';
import MovieList from '../MovieList/MovieList';


export default function Home() {
    const [movies, setMovies] = useState([]);

    async function getMovies() {
        //let serverUrl = process.env.REACT_APP_SERVER;
        // let response = await fetch(serverUrl);

         let url = 'https://movies-recipe.herokuapp.com/trending';
        let response = await fetch(url);
        console.log("response", response);
        let moviesData = await response.json();
        setMovies(moviesData);
        console.log("1, After updating", movies);
    }
//    async  function getMovies(){

//       let response= await axios.get(`${process.env.REACT_APP_SERVER}/trending`);
//       let moviesData = await response.data;
//       setMovies(moviesData);
//    } 
   
    function updateMovie(newMovie, id) {
        let updatedMovies = movies.map((movie) => {
            if (movie.id === id) {
                movie.comment = newMovie.userComment;
                return movie;
            } else {
                return movie;
            }
        })

        setMovies(updatedMovies );

    }

    useEffect(() => {
        getMovies();
    }, [])

  

    return (
        <>
             <h1 align="center">Welcome to Movies Web Application</h1>
             <br/>
            {
                (movies.length > 0) && <MovieList movies={movies} updateMovie={updateMovie}/>
            }
          


        </>
    )

}