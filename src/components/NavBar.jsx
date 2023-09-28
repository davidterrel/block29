import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <>
        //make all these a nav bar
            <li><Link to="/NavBar">Nav Bar</Link></li>
            <li><Link to="/AllPlayers1">All Players</Link></li>
            <li><Link to="/NewPlayerForm">Red</Link></li>
            <li><Link to="/SinglePlayer">Single Player</Link></li>
        </>
    )
}