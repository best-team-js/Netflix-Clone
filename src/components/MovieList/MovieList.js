import './MovieList.css';
import { Button, Row, Container } from 'react-bootstrap';
import Movie from '../Movie/Movie'

export default function MovieList(props) {
    console.log("2, inside cards ",props)
    return (
        <>
        <Container fluid className="main-container" >
                <div className="d-flex flex-wrap justify-content-between w-75 ms-auto me-auto">
            {
                props.movies.map((movie) => {
                    return (
                        <>
                            <Movie key={movie.id} movie={movie} updateMovie={props.updateMovie}/>
                           
                        </>
                    )
                }

                )
            }
              </div>
            </Container>
        </>
    )
}

