import { useRoutes } from "react-router-dom";
import { routes } from "../../routes";


function Allroutes (){
    const element = useRoutes(routes);
    return(
        element
    )
}
export default Allroutes;