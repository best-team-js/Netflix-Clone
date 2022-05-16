    import { useState, useEffect } from 'react';
    import Card from 'react-bootstrap/Card';
    import Button from 'react-bootstrap/Button';
    
    export default function FavList() {
        const [favMovies, setFavMovies] = useState();
    
        async function getFavMovies() {
            let url = 'https://movies-recipe.herokuapp.com';
            
            // let url = `${process.env.REACT_APP_SERVER}/favRecipes`
            let response = await fetch(`${url}/getMovies`, {
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
                                <Card.Img variant="top" src={favMovies.poster_path} />
                               
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
    
    

