import { useNavigate } from "react-router-dom"

const Guard = ({ isAllowed, children }) => {
    const navigate = useNavigate()

    if (!isAllowed) {
        return <h2>This page does not exist
            or you're not allowed to see its
            content.</h2>
    }
    return children
}

export default Guard