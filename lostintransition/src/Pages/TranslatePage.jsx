import Translator from "../Components/Translation";
import routeGuard from "../Components/RouteGuard";
export function TranslatePage() {
    return(
        <div>
            <Translator/>
        </div>
    )
}

export default routeGuard(TranslatePage);