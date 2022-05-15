
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import MovieList from '../MovieList/MovieList';


export default function Home() {
    const [movies, setMovies] = useState([]);

    async function getMovies() {
        //let serverUrl = process.env.REACT_KEY_SERVER;
        // let response = await fetch(serverUrl);

        let url = 'https://movies-recipe.herokuapp.com';
        let response = await fetch(`${url}/trending`);
        console.log("response", response);
        let moviesData = await response.json();
        setMovies(moviesData);
        console.log("1, After updating", movies);
    }

    useEffect(() => {
        getMovies();
    }, [])

  

    return (
        <>
             <Button variant="danger">Get Movies</Button>
            {
                (movies.length > 0) && <MovieList movies={movies} />
            }
          


        </>
    )

}