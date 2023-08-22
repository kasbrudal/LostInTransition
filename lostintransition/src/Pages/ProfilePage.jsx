import TranslationsList from '../Components/TranslationsList.jsx'
import routeGuard from '../Components/RouteGuard.jsx';

export function ProfilePage() {
    return (
        <div>
            <TranslationsList></TranslationsList>
        </div>
    )
}

export default routeGuard(ProfilePage);