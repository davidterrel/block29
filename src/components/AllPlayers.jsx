import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function AllPlayer() {
    const [puppies, setPuppies] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        async function getData() {

            try {
                const response = await fetch(
                    'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players'
                );
                const result = await response.json();
                console.log(result.data.players);
                setPuppies(result.data.players)
            } catch (err) {
                console.error(err);
            }
        }
        getData()

    }, [])
    return (
        <div>
            <h1>All Players</h1>
            {puppies.map((puppy) => (
                <div>
                    {puppy.name}
                    <button onClick={() => navigate(`/${puppy.id}`)}>view details</button>
                </div>
            ))}
        </div>
    )
}

//use delete here