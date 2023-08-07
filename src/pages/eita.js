import { useRouteError } from "react-router-dom"

export default function ErrorMsg(){

    const erro = useRouteError()
    return(
        <div>
            <h1>Erro '${erro.status} ${erro.data} '</h1>
        </div>
    )
}