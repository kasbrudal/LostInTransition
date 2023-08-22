import TranslationsList from '../Components/TranslationsList.jsx'
import routeGuard from '../Components/RouteGuard.jsx';
import { useNavigate } from "react-router-dom";

export function ProfilePage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("username");

        navigate("/");
    };
    return (
        <div>
            <TranslationsList></TranslationsList>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default routeGuard(ProfilePage);