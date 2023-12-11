// Import Components
import Navbar from "../components/nav/navbar";
import ActiveTournaments from "../components/tournaments/ActiveTournaments";
import TournamentPage from "../components/auth/Tournament";

export default function Root() {
    return (<>
        <Navbar />
        <div className="container border-bottom border-dark-subtle">
            <div className="mt-3 p-3 text-center">
                <h1>Welcome!</h1>
                <p>View active tournaments below</p>
            </div>
        </div>
        <index />
        < TournamentPage/>
        <ActiveTournaments />
    </>);
}