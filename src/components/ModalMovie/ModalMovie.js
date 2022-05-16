import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';

export default function ModalMovie(props) {

    let commentRef = useRef();

    function handleComment(e) {
        e.preventDefault();
        let userComment = commentRef.current.value;
        console.log({ userComment });
        let newMovie = { ...props.chosenMovie, userComment };
        props.updateMovie(newMovie, props.chosenMovie.id);

    }
    async function handleAddFav(e,movie) {
    e.preventDefault();
    console.log("movie", movie);
    let url = 'https://movies-recipe.herokuapp.com';
 
    let result = {
        title: movie.title,
        release_date: movie.release_date,
        overview: movie.overview,
        poster_path:movie.poster_path,
        comment: movie.comment,

    }
    console.log("result", result)
    let response = await fetch(`${url}/addMovie`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(result),
    })

    let addedMovies = await response.json();
    console.log("addedmovies", addedMovies);
}

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.chosenMovie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={`https://image.tmdb.org/t/p/w500${props.chosenMovie.poster_path}`} alt="movie image" style={{ width: "100%" }} />
                   
                    {props.chosenMovie.overview.substring(0, 200)}
                    <br />
                    {props.chosenMovie.comment ? props.chosenMovie.comment : "No comment is added"}
                    <Form></Form>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control ref={commentRef} type="text" placeholder="Enter your comment" />
                            <Form.Text className="text-muted">
                                Add your comment about film
                            </Form.Text>
                        </Form.Group>
                        <p align="center">
                        <Button variant="danger" type="submit" onClick={(e) => handleComment(e)}>
                            Submit Comment
                        </Button> &nbsp; &nbsp; &nbsp;
                        <Button variant="danger" type="submit" onClick={(e) => { handleAddFav(e, props.chosenMovie) }}>
                            Add to favorites
                        </Button>
                        </p>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                   
                </Modal.Footer>
            </Modal>
        </>
    )
}
