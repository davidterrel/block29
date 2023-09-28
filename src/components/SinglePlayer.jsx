import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SinglePlayer() {
    const [puppies, setPuppies] = useState([])
    const { id } = useParams()
    useEffect(() => {
        async function getData() {

            try {
                const response = await fetch(
                    `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players/${id}`
                );
                const result = await response.json();
                console.log(result);
                setPuppies(result.data.player)
            } catch (err) {
                console.error(err);
            }
        }
        getData()

    }, [])
    return (
        <div>
            <h1>Single Player</h1>
            {puppies.name} {puppies.breed}
        </div>
    )
}