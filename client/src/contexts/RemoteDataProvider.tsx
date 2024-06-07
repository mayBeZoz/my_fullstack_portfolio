import { createContext } from "react"

const Context = createContext<RemoteDataProvider>(undefined)

function RemoteDataProvider() {
    return (
        <div>RemoteDataProvider</div>
    )
}

export default RemoteDataProvider