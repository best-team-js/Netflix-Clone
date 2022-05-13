import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
// import ModalRecipe from "./Modal"

// import {Card , Button} from 'react-bootstrap'



export default function Movie(props) {
    // const [show, setShow] = useState(false);
    // const [chosenRecipe, setChosenRecipes] = useState();

    // const handleClose = () => setShow(false);
    // const handleShow = (recipe) => {
    //     setChosenRecipes(recipe);
    //     setShow(true);
    console.log(props);

    
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.recipe.image} />
                <Card.Body>
                    <Card.Title>{props.recipe.title}</Card.Title>
                    <Card.Text>
                        {props.recipe.overview}
                    </Card.Text>
                    <Card.Text>
                        {props.recipe.release_date} 
                    </Card.Text>
                  
                    
                </Card.Body>
            </Card>
           
          
        </>
    )
}