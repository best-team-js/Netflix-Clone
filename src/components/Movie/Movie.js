import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import ModalMovie from "../ModalMovie/ModalMovie"

// import {Card , Button} from 'react-bootstrap'



export default function Movie(props) {
    const [show, setShow] = useState(false);
    const [chosenMovie, setChosenMovies] = useState();

    const handleClose = () => setShow(false);
    const handleShow = (movie) => {
        setChosenMovies(movie);
        setShow(true);
       //console.log(props);
       }
    return (
        <>
           <Card style={{ width: '18rem', textAlign: "center", marginTop: "3rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} />
                <Card.Body className='cardBody'>
                    <Card.Title>{props.movie.title}</Card.Title>
                    <Card.Text className="scrollBar">
                        {props.movie.overview}
                    </Card.Text>
                    <Card.Text>
                        {props.movie.release_date} 
                    </Card.Text>
                    <Button variant="danger" onClick={()=>{handleShow(props.movie)}}>Add To Favorite </Button>
                    
                </Card.Body>
            </Card>
            {
                chosenMovie && <ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie} />
                //chosenRecipe && <ModalRecipe show={show} handleClose={handleClose} chosenRecipe={chosenRecipe} updateRecipe={props.updateRecipe}/>
            }
          
        </>
    )
}


