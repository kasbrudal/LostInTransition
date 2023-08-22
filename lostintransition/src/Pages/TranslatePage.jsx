import TranslationText from "../Components/Translation";
import routeGuard from "../Components/RouteGuard";
export function TranslatePage() {
    return(
        <div>
            <TranslationText/>
        </div>
    )
}

export default routeGuard(TranslatePage);