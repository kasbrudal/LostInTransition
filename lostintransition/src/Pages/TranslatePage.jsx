import Translator from "../Components/Translation";
import routeGuard from "../Components/RouteGuard";
import Navbar from '../Components/Navbar.jsx'

export function TranslatePage() {
    return(
        <div>
            <Navbar></Navbar>
            <Translator></Translator>
        </div>
    )
}

export default routeGuard(TranslatePage);