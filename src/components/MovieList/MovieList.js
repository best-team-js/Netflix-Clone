import Movie from '../Movie/Movie'

export default function MovieList(props) {
    console.log("2, inside cards ",props)
    return (
        <>
            {
                props.recipes.map((recipe) => {
                    return (
                        <>
                            <Movie recipe={recipe} />
                        </>
                    )
                }

                )
            }
        </>
    )
}