import TranslationsList from '../Components/TranslationsList.jsx'
import routeGuard from '../Components/RouteGuard.jsx';
import Navbar from '../Components/Navbar.jsx'

export function ProfilePage() {

   
    return (
        <div>
            <Navbar></Navbar>
            <TranslationsList></TranslationsList>
        </div>
    )
}

export default routeGuard(ProfilePage);