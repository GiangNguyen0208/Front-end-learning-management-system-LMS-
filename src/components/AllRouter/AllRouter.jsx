import { useRoutes } from "react-router-dom";
import { routes } from "../../routes/index";

export default function AllRouter() {
    const elements = useRoutes(routes);
    return (
        <>
            {elements}
        </>
    )
}