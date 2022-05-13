
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import MovieList from '../MovieList/MovieList';


export default function Home() {
    const [recipes, setRecipes] = useState([]);
    async function getRecipes() {
        //let serverUrl = process.env.REACT_KEY_SERVER;
        // let response = await fetch(serverUrl);

        let url = 'https://movies-recipe.herokuapp.com';
        let response = await fetch(`${url}/trending`);
        console.log("response", response);
        let recipesData = await response.json();
        setRecipes(recipesData);
        console.log("1, After updating", recipes);
    }

    useEffect(() => {
        getRecipes();
    }, [])

    return (
        <>
            <Button variant="info">Get Recipes</Button>
            {
                (recipes.length > 0) && <MovieList recipes={recipes} />
            }


        </>
    )

}