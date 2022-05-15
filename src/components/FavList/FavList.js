    import { useState, useEffect } from 'react';
    import Card from 'react-bootstrap/Card';
    import Button from 'react-bootstrap/Button';
    
    export default function FavList() {
        const [favMovies, setFavMovies] = useState();
    
        async function getFavMovies() {
            let url = `${process.env.REACT_APP_SERVER}/favRecipes`
            let response = await fetch(url, {
                method: 'GET'
            });
    
            let recivedData = await response.json();
            getFavMovies(recivedData)
        }
    
        async function handleDelete(id) {
            let url = `${process.env.REACT_APP_SERVER}/delete/${id}`;
            let response = await fetch(url, {
                method: 'DELETE',
            })
            // let deletedRecipe = await response.json();
    
            if (response.status == 204) {
                getFavMovies();
                alert("Recipe deleted successfully");
            }
    
        }
    
    
        useEffect(() => {
            getFavMovies();
        }, []);
        return (
            <>
                <h1 align="center">Favourite Movies </h1>
                {
                    favMovies && favMovies.map((favMovies) => {
                        return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${favMovies.poster_path}`} />
                               
                                <Card.Body>
                                    <Card.Title>{favMovies.title}</Card.Title>
                                    <Card.Text>
                                        {favMovies.overview}
                                    </Card.Text>
                                    <Button variant="danger" onClick={()=>handleDelete(favMovies.id)}>Delete</Button>
                                </Card.Body>
                            </Card>
                        )
                    }
                    )
                }
    
            </>
        )
    }
    
    

