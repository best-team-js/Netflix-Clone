
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import MovieList from '../MovieList/MovieList';


export default function Home() {
    const [movies, setMovies] = useState([]);

    async function getMovies() {
        //let serverUrl = process.env.REACT_APP_SERVER;
        // let response = await fetch(serverUrl);

        let url = 'https://movies-recipe.herokuapp.com';
        let response = await fetch(`${url}/trending`);
        console.log("response", response);
        let moviesData = await response.json();
        setMovies(moviesData);
        console.log("1, After updating", movies);
    }
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