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
    console.log(props);

       }
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} />
                <Card.Body>
                    <Card.Title>{props.movie.title}</Card.Title>
                    <Card.Text>
                        {props.movie.overview}
                    </Card.Text>
                    <Card.Text>
                        {props.movie.release_date} 
                    </Card.Text>
                    <Button variant="danger" onClick={()=>{handleShow(props.movie)}}>Show Model</Button>
                    
                </Card.Body>
            </Card>
            {
                chosenMovie && <ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie} />
            }
          
        </>
    )
}