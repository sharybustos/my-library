const Guard = ({ isAllowed, children }) => {

    if (!isAllowed) {
        return <h2>This page does not exist
            or you're not allowed to see its
            content.</h2>
    }
    return children
}

export default Guard