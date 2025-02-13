import { Mainnav } from "./mainnav";
import { TopNav } from "./topnav";

export function Nav(){
    return(
        <nav>
            <TopNav />
            <Mainnav />
        </nav>
    )
}