import { useParams } from "react-router-dom"

const Book = () => {
    const { id } = useParams()

    return (
        <div>
            <h2>#{id} Beloved</h2>
            <h4>Toni Morrison</h4>
            <p>Lorem ipsum dolor sit
                amet consectetur adipisicing
                elit. Dolore excepturi quos
                alias cumque sit asperiores commodi
                nemo iure cupiditate aspernatur eaque
                consectetur libero, assumenda, saepe
                delectus. Dolorem est vel placeat.
            </p>
        </div>
    )
}

export default Book