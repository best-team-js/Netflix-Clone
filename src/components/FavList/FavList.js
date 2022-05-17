    import { useState, useEffect } from 'react';
    import Card from 'react-bootstrap/Card';
    import Button from 'react-bootstrap/Button';
    
    export default function FavList() {
        const [favMovies, setFavMovies] = useState();
    
        async function getFavMovies() {
            // let url = 'https://movies-recipe.herokuapp.com';
           
            // `${url}/getMovies`
        let url = `${process.env.REACT_APP_SERVER}/getMovies`
            let response = await fetch(url, {
                method: 'GET'
            });
    
            let recivedData = await response.json();
            setFavMovies(recivedData);
        }
    
        async function handleDelete(id) {
            let url = 'https://movies-recipe.herokuapp.com';
            
            
            let response = await fetch(`${url}/delete/${id}`, {
                method: 'DELETE',
            })
           
             // let deletedMovie = await response.json(
    
            if (response.status == 204) {
                getFavMovies();
                alert("movies deleted successfully");
            }
    
        }
    
    
        useEffect(() => {
            getFavMovies();
        }, []);
        return (
            <>
                <h1 align="center">Favourite Movies </h1>
                {
                    favMovies && favMovies.map((favMovie) => {
                        return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${favMovie.poster_path}`}   />
                               
                                <Card.Body>
                                    <Card.Title>{favMovie.title}</Card.Title>
                                    <Card.Text>
                                        {favMovie.overview}
                                    </Card.Text>
                                    <Button variant="danger" onClick={()=>handleDelete(favMovie.id)}>Delete</Button>
                                </Card.Body>
                            </Card>
                        )
                    }
                    )
                }
    
            </>
        )
    }
    
    

